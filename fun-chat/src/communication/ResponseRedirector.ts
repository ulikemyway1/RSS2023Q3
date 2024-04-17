import contactsListController from '../chat/contacts-list/ContactsListController';
import loginPage from '../login/loginPage';
import userController, { UserDataResponse } from '../user/UserController';
const ResponseTypes = [
    'USER_LOGIN',
    'USER_LOGOUT',
    'ERROR',
    'USER_ACTIVE',
    'USER_INACTIVE',
    'USER_EXTERNAL_LOGOUT',
    'USER_EXTERNAL_LOGIN',
] as const;
export type ResponseType = (typeof ResponseTypes)[number];

export type ResponseTitle = 'USER_LIST' | 'USER_LOGOUT' | 'USER_LOGIN';
class ResponseRedirector {
    private static responseRedirector: ResponseRedirector;

    private constructor() {}

    public takeResponse(response: BasicResponse) {
        if (response.id) {
            const responseTitle = response.id.split(':')[0];

            if (responseTitle === 'USER_LOGIN') {
                this.handleUserLoginResponse(response);
            } else if (responseTitle === 'USER_LOGOUT') {
                this.handleUserLogoutResponse(response);
            } else if (responseTitle === 'USER_LIST') {
                if (this.isUsersListResponse(response))
                    contactsListController.handleResponse(response);
            }
        } else {
            if (this.isUserStatutsChangeResponse(response)) {
                contactsListController.handleResponse(response);
            }
        }
    }

    public static getInstance(): ResponseRedirector {
        if (!ResponseRedirector.responseRedirector) {
            ResponseRedirector.responseRedirector = new ResponseRedirector();
        }
        return ResponseRedirector.responseRedirector;
    }

    private isUserDataResponse(
        response: BasicResponse
    ): response is UserDataResponse {
        return (
            typeof response.id === 'string' &&
            typeof response.payload.user.login === 'string' &&
            typeof response.payload.user.isLogined === 'boolean'
        );
    }

    private isUsersListResponse(
        response: BasicResponse
    ): response is UsersListResponse {
        return Array.isArray(response.payload.users);
    }

    private isUserStatutsChangeResponse(
        response: BasicResponse
    ): response is UserStatutsChangeResponse {
        return (
            response.type === 'USER_EXTERNAL_LOGIN' ||
            response.type === 'USER_EXTERNAL_LOGOUT'
        );
    }

    private isErrorResponse(
        response: BasicResponse
    ): response is BasicErrorResponse {
        return (
            response.type === 'ERROR' &&
            typeof response.payload.error === 'string'
        );
    }

    private handleUserLoginResponse(response: BasicResponse) {
        if (
            response.type === 'USER_LOGIN' &&
            this.isUserDataResponse(response)
        ) {
            userController.logIn(response);
        } else if (
            response.type === 'ERROR' &&
            this.isErrorResponse(response)
        ) {
            loginPage
                .getLoginForm()
                .showServerErrorMessage(response.payload.error);
        }
    }

    private handleUserLogoutResponse(response: BasicResponse) {
        if (
            response.type === 'USER_LOGOUT' &&
            this.isUserDataResponse(response)
        ) {
        }
    }
}

const responseRedirector = ResponseRedirector.getInstance();

export default responseRedirector;

export type BasicResponse = {
    id: ResponseTitle | null;
    type: ResponseType;
    payload: any;
};

export type BasicErrorResponse = {
    id: ResponseTitle | null;
    type: 'ERROR';
    payload: {
        error: string;
    };
};

export type UsersListResponse = {
    id: ResponseTitle | null;
    type: 'USER_ACTIVE' | 'USER_INACTIVE';
    payload: {
        users: UserStatus;
    };
};

export type UserStatus = {
    login: string;
    isLogines: boolean;
}[];

export type UserStatutsChangeResponse = {
    id: null;
    type: 'USER_EXTERNAL_LOGIN' | 'USER_EXTERNAL_LOGOUT';
    payload: {
        user: {
            login: string;
            isLogined: boolean;
        };
    };
};
