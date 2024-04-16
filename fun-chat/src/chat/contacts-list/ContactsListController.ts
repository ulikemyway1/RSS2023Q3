import {
    UserStatutsChangeResponse,
    UsersListResponse,
} from '../../communication/ResponseRedirector';
import ws from '../../communication/socket';
import userListModel from './ContactsListModel';
import userListView from './ContactsListView';

class ContactsListController {
    model = userListModel;
    view = userListView;

    public requestAllContacts() {
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
            setTimeout(() => this.requestAllContacts.bind(this), 5000);
        }
    }

    public handleResponse(
        response: UsersListResponse | UserStatutsChangeResponse
    ) {
        if (
            response.type === 'USER_ACTIVE' ||
            response.type === 'USER_INACTIVE'
        ) {
            const users: string[] = [];
            response.payload.users.forEach((userInfo) =>
                users.push(userInfo.login)
            );
            this.model.setContacts(response.type, users);
            this.view.reloadView(response.type);
        } else if (
            response.type === 'USER_EXTERNAL_LOGIN' ||
            response.type === 'USER_EXTERNAL_LOGOUT'
        ) {
            const userData = {
                username: response.payload.user.login,
                status: response.payload.user.isLogined,
            };
            this.model.updateContactStatus(userData);
        }
    }

    public updateView(): void {
        this.requestAllContacts();
    }
}

const userListController = new ContactsListController();
export default userListController;
