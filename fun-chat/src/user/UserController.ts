import app from '../app/app';
import userListController from '../chat/contacts-list/ContactsListController';
import { ResponseTitle } from '../communication/ResponseRedirector';
import ws from '../communication/socket';
import generateId from '../utils/generateID';
import userModel, { UserModel } from './UserModel';
import userView, { UserView } from './UserView';

class UserController {
    private userModel: UserModel;
    private userView: UserView;
    constructor(model: UserModel, view: UserView) {
        this.userModel = model;
        this.userView = view;
    }

    public logIn(userDataRespone: UserDataResponse) {
        this.userModel.setUsername(userDataRespone.payload.user.login);
        this.userModel.setLoginStatus(userDataRespone.payload.user.isLogined);
        this.userModel.setPassword(app.getState().getItem('userPassword'));
        this.userView.updateUserView();
        app.getRouter().navigate('main');
        userListController.updateView();
    }

    public logOut() {
        const requestData = {
            id: `USER_LOGOUT:${generateId()}`,
            type: 'USER_LOGOUT',
            payload: {
                user: {
                    login: this.userModel.getUsername(),
                    password: app.getState().getItem('userPassword'),
                },
            },
        };
        ws.send(JSON.stringify(requestData));
        this.userModel.setPassword(undefined);
        this.userModel.setLoginStatus(false);
        app.getRouter().navigate('login');
        //todo: cleaer login form;
    }
}

const userController = new UserController(userModel, userView);

export default userController;

export type UserDataResponse = {
    id: ResponseTitle;
    type: 'USER_LOGIN';
    payload: {
        user: {
            login: string;
            isLogined: boolean;
        };
    };
};
