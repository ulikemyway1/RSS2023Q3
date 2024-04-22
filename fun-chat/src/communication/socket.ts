import app from '../app/app';
import contactsListController from '../chat/contacts-list/ContactsListController';
import contactsListModel from '../chat/contacts-list/ContactsListModel';
import dialogBoxModel from '../chat/dialog-box/DialogBoxModel';
import dialogBoxView from '../chat/dialog-box/DialogBoxView';
import Popup from '../popup/Popup';
import generateId from '../utils/generateID';
import responseRedirector, { BasicResponse } from './ResponseRedirector';

class Socket {
    private ws = new WebSocket('ws://localhost:4000/');
    private popup: Popup = new Popup('Connection lost. Trying to reconnect...');
    private reconnectorID: NodeJS.Timeout | null = null;

    constructor() {
        this.ws.addEventListener('open', () => {
            if (this.popup) {
                this.popup.setResolved();
            }
            if (this.reconnectorID) clearInterval(this.reconnectorID);
            const userName = app.getState().getItem('userName');
            const password = app.getState().getItem('userPassword');
            if (userName && password) {
                const userData = {
                    id: `USER_LOGIN:${generateId()}`,
                    type: 'USER_LOGIN',
                    payload: {
                        user: {
                            login: userName,
                            password: password,
                        },
                    },
                };
                this.ws.send(JSON.stringify(userData));
            }
        });

        this.ws.addEventListener(
            'message',
            (response: MessageEvent<string>) => {
                const responseData: BasicResponse = JSON.parse(response.data);
                responseRedirector.takeResponse(responseData);
            }
        );

        this.ws.addEventListener('close', () => {
            if (this.popup) {
                document.body.append(this.popup.getView());
            }
            dialogBoxView.resetView();
            dialogBoxModel.resetModel();
            contactsListModel.resetContactsList();

            this.reconnectorID = setInterval((): void => {
                this.ws = new WebSocket('ws://localhost:4000/');
                this.ws.addEventListener(
                    'message',
                    (response: MessageEvent<string>) => {
                        const responseData: BasicResponse = JSON.parse(
                            response.data
                        );
                        responseRedirector.takeResponse(responseData);
                    }
                );
                this.ws.addEventListener('open', () => {
                    if (this.popup) {
                        this.popup.setResolved();
                    }
                    if (this.reconnectorID) clearInterval(this.reconnectorID);
                    const userName = app.getState().getItem('userName');
                    const password = app.getState().getItem('userPassword');
                    if (userName && password) {
                        const userData = {
                            id: `USER_LOGIN:${generateId()}`,
                            type: 'USER_LOGIN',
                            payload: {
                                user: {
                                    login: userName,
                                    password: password,
                                },
                            },
                        };
                        this.ws.send(JSON.stringify(userData));
                    }
                    contactsListController.view.deleteAllContactsCard();
                    contactsListController.requestAllContacts();
                });
            }, 3000);
        });
    }

    public getWS(): WebSocket {
        return this.ws;
    }
}

const ws = new Socket();
export default ws;
