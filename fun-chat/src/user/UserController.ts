import app from '../app/app';
import contactsListController from '../chat/contacts-list/ContactsListController';
import dialogBoxController from '../chat/dialog-box/DialogBoxController';
import dialogBoxModel from '../chat/dialog-box/DialogBoxModel';
import dialogBoxView from '../chat/dialog-box/DialogBoxView';
import { ResponseTitle } from '../communication/ResponseRedirector';
import ws from '../communication/socket';
import loginPage from '../login/loginPage';
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
        contactsListController.updateView();
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
        ws.getWS().send(JSON.stringify(requestData));
        this.userModel.setPassword('');
        this.userModel.setUsername('');
        this.userModel.setLoginStatus(false);
        dialogBoxModel.unreadMessages.clear();
        dialogBoxView.cancelChanges();
        dialogBoxController.resetDialog();
        app.getRouter().navigate('login');
        loginPage.getLoginForm().resetForm();
        dialogBoxView.msgArea.append(dialogBoxView.msgAreaNoContactTip);
        dialogBoxView.msgAreaNoContactTip.classList.remove('hidden');
        dialogBoxView.msgAreaNoChatHistoryTip.classList.add('hidden');
        sessionStorage.clear();
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
