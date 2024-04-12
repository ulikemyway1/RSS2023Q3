import userModel, { UserModel } from './UserModel';
import userView, { UserView } from './UserView';

class UserController {
    private userModel: UserModel;
    private userView: UserView;
    constructor(model: UserModel, view: UserView) {
        this.userModel = model;
        this.userView = view;
    }

    public takeResponse(userDataRespone: UserDataResponse) {
        this.userModel.setUsername(userDataRespone.payload.user.login);
        this.userModel.setLoginStatus(userDataRespone.payload.user.isLogined);
        this.userView.updateUserView();
    }
}

const userController = new UserController(userModel, userView);

export default userController;

export type UserDataResponse = {
    id: string;
    type: 'USER_LOGIN';
    payload: {
        user: {
            login: string;
            isLogined: boolean;
        };
    };
};
