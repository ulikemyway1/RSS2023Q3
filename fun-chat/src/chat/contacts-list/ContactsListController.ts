import {
    UserStatutsChangeResponse,
    UsersListResponse,
} from '../../communication/ResponseRedirector';
import ws from '../../communication/socket';
import generateId from '../../utils/generateID';
import userListModel from './ContactsListModel';
import userListView from './ContactsListView';
import Contact from './contact';

class ContactsListController {
    model = userListModel;
    view = userListView;

    public requestAllContacts() {
        const requestActive = {
            id: `USER_LIST:${generateId()}`,
            type: 'USER_ACTIVE',
            payload: null,
        };

        const requestInactive = {
            id: `USER_LIST:${generateId()}`,
            type: 'USER_INACTIVE',
            payload: null,
        };

        if (ws.getWS().OPEN) {
            ws.getWS().send(JSON.stringify(requestActive));
            ws.getWS().send(JSON.stringify(requestInactive));
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
            response.payload.users.forEach((userInfo) => {
                users.push(userInfo.login);
                const fetchHistoryResponseData = {
                    id: `MSG_FROM_USER:${generateId()}`,
                    type: 'MSG_FROM_USER',
                    payload: {
                        user: {
                            login: userInfo.login,
                        },
                    },
                };
                ws.getWS().send(JSON.stringify(fetchHistoryResponseData));
            });
            this.model.setContacts(response.type, users);
            console.log('sss');
            this.view.reloadView();
        } else if (
            response.type === 'USER_EXTERNAL_LOGIN' ||
            response.type === 'USER_EXTERNAL_LOGOUT'
        ) {
            const userData = {
                username: response.payload.user.login,
                status: response.payload.user.isLogined,
            };
            if (
                !this.model.getActiveContacts().has(userData.username) &&
                !this.model.getInactiveContacts().has(userData.username)
            ) {
                this.model.setContact(userData.username);
                this.view.reloadView();
            } else {
                this.model.updateContactStatus(userData);
                this.view.reloadView();
            }
        }
    }

    public updateView(): void {
        this.requestAllContacts();
    }

    public findContact(query: string) {
        this.hideContacts(this.model.getActiveContacts(), query);
        this.hideContacts(this.model.getInactiveContacts(), query);
    }

    public cancelFilter() {
        this.model
            .getActiveContacts()
            .forEach((contactView) => contactView.show());
        this.model
            .getInactiveContacts()
            .forEach((contactView) => contactView.show());
    }
    private hideContacts(map: Map<string, Contact>, query: string) {
        map.forEach((contactView, contactName) => {
            if (
                query.toUpperCase() ===
                contactName.slice(0, query.length).toUpperCase()
            ) {
                contactView.show();
            } else {
                contactView.hide();
            }
        });
    }
}

const contactsListController = new ContactsListController();
export default contactsListController;
