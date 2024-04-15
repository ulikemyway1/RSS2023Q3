import loginPage from '../login/loginPage';
import userController, { UserDataResponse } from '../user/UserController';

class ResponseRedirector {
    private static responseRedirector: ResponseRedirector;

    private constructor() {}

    public takeResponse(response: BasicResponse) {
        if (response.id && response.id.split(':')[0] === 'USER_LOGIN') {
            this.handleUserLoginResponse(response);
        } else if (response.id && response.id.split(':')[0] === 'USER_LOGOUT') {
            this.handleUserLogoutResponse(response);
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
    id: string | null;
    type: ResponeType;
    payload: any;
};

export type BasicErrorResponse = {
    id: string;
    type: 'ERROR';
    payload: {
        error: string;
    };
};
type ResponeType = 'USER_LOGIN' | 'USER_LOGOUT' | 'ERROR';
