import {
    BasicResponse,
    UsersListResponse,
} from '../../communication/ResponseRedirector';
import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import userListModel from './UserListModel';
import userListView from './UserListView';

class UserListController {
    model = userListModel;
    view = userListView;

    public requestAllUsers() {
        const requestActive = {
            id: `USER_LIST:${crypto.randomUUID()}`,
            type: 'USER_ACTIVE',
            payload: null,
        };

        const requestInactive = {
            id: `USER_LIST:${crypto.randomUUID()}`,
            type: 'USER_INACTIVE',
            payload: null,
        };

        if (ws.OPEN) {
            ws.send(JSON.stringify(requestActive));
            ws.send(JSON.stringify(requestInactive));
        } else {
            setTimeout(() => this.requestAllUsers.bind(this), 5000);
        }
    }

    public handleResponse(response: UsersListResponse) {
        const users: string[] = [];
        response.payload.users.forEach((userInfo) =>
            users.push(userInfo.login)
        );
        this.model.setUsers(response.type, users);
        this.view.reloadView();
    }
}

const userListController = new UserListController();
export default userListController;
