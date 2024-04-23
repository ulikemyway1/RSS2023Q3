import app from '../app/app';
import contactsListController from '../chat/contacts-list/ContactsListController';
import contactsListModel from '../chat/contacts-list/ContactsListModel';
import dialogBoxController from '../chat/dialog-box/DialogBoxController';
import dialogBoxModel from '../chat/dialog-box/DialogBoxModel';
import dialogBoxView from '../chat/dialog-box/DialogBoxView';
import Popup from '../popup/Popup';
import generateId from '../utils/generateID';
import responseRedirector, { BasicResponse } from './ResponseRedirector';

class Socket {
    private ws = new WebSocket('ws://localhost:4000/');
    private popup: Popup = new Popup();
    private reconnectorID: NodeJS.Timeout | null = null;

    constructor() {
        this.setHandlerOnOpen();
        this.setHandlerOnMessage();
        this.setHandlerOnClose();
    }

    public getWS(): WebSocket {
        return this.ws;
    }
    public setHandlerOnOpen() {
        this.ws.addEventListener('open', () => {
            if (this.popup) {
                this.popup.setResolved();
            }
            if (this.reconnectorID) {
                clearInterval(this.reconnectorID);
                this.reconnectorID = null;
                contactsListController.view.deleteAllContactsCard();
                contactsListController.requestAllContacts();
                dialogBoxController.resetDialog();
            }

            this.setHandlerOnClose();
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
    }

    public setHandlerOnMessage() {
        this.ws.addEventListener(
            'message',
            (response: MessageEvent<string>) => {
                const responseData: BasicResponse = JSON.parse(response.data);
                responseRedirector.takeResponse(responseData);
            }
        );
    }

    public setHandlerOnClose() {
        this.ws.addEventListener('close', () => {
            this.popup.setUnresolved();
            this.showPopUp();
            this.attempReconnect();
        });
    }

    public showPopUp() {
        if (this.popup) {
            document.body.append(this.popup.getView());
        }
        dialogBoxView.resetView();
        dialogBoxModel.resetModel();
        contactsListModel.resetContactsList();
    }

    public attempReconnect() {
        if (!this.reconnectorID) {
            this.reconnectorID = setInterval((): void => {
                this.ws = new WebSocket('ws://localhost:4000/');
                this.setHandlerOnOpen();
                this.setHandlerOnMessage();
                this.setHandlerOnClose();
            }, 3000);
        }
    }
}

const ws = new Socket();
export default ws;
