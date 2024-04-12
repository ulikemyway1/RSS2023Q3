import userController, { UserDataResponse } from '../user/UserController';

class ResponseRedirector {
    private static responseRedirector: ResponseRedirector;

    private constructor() {}

    public takeResponse(response: BasicResponse) {
        if (
            response.type === 'USER_LOGIN' &&
            this.isUserDataResponse(response)
        ) {
            userController.takeResponse(response);
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
}

const responseRedirector = ResponseRedirector.getInstance();

export default responseRedirector;

export type BasicResponse = {
    id: string | null;
    type: ResponeType;
    payload: any;
};

type ResponeType = 'USER_LOGIN';
