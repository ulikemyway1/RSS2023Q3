import {
    FetchMessageHistoryResponse,
    MessageDeletionResponse,
    MessageInfoResponse,
    SentMessageResponse,
} from '../../communication/ResponseRedirector';
import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import generateId from '../../utils/generateID';
import contactsListController from '../contacts-list/ContactsListController';
import contactsListModel from '../contacts-list/ContactsListModel';
import Contact from '../contacts-list/contact';
import dialogBoxModel from './DialogBoxModel';
import dialogBoxView from './DialogBoxView';

class DialogBoxController {
    public view = dialogBoxView;
    public model = dialogBoxModel;

    public updateDialogHeader(contactCard: Contact): void {
        while (this.view.header.lastElementChild) {
            this.view.header.lastElementChild.remove();
        }
        const clonedContactCardView = contactCard
            .getView()
            .cloneNode(true) as HTMLElement;
        this.view.header.append(clonedContactCardView);
        this.model.setCurrentContact(contactCard);
    }

    public resetDialog(): void {
        this.view.resetView();
        this.model.setCurrentContact(null);
        this.view.inputField.disabled = true;
        this.view.sendMessageBtn.disabled = true;
    }

    public handleResponse(
        response:
            | SentMessageResponse
            | FetchMessageHistoryResponse
            | MessageDeletionResponse
    ) {
        if (response.type === 'MSG_SEND') {
            this.pullMessage(response.payload.message);
        } else if (response.type === 'MSG_FROM_USER') {
            response.payload.messages.forEach((messageInfo) =>
                this.pullMessage(messageInfo)
            );
        } else if (response.type === 'MSG_DELETE') {
            const contactKey = response.id?.split(':')[1];
            const msgID = response.payload.message.id;
            const messageCard = this.model.getMessageCard(msgID, contactKey);
            messageCard?.getView().remove();
            this.model.deleteMessage(msgID, contactKey);
        }
    }

    private pullMessage(messageInfo: MessageInfoResponse) {
        const contactKey = this.generateContactKey(
            messageInfo.from,
            messageInfo.to
        );
        this.model.addMessage(contactKey, messageInfo.id, messageInfo);
        contactsListModel.getContactCard(messageInfo.from)?.updateMsgCount();
        const msgCard = this.model.getMessageCard(messageInfo.id, contactKey);
        if (msgCard) {
            if (
                messageInfo.to ===
                    this.model.getCurrentContact()?.getContactName() ||
                messageInfo.from ===
                    this.model.getCurrentContact()?.getContactName()
            ) {
                this.view.appendMsg(msgCard.getView());
                msgCard.getView().scrollIntoView();
                // if (this.model.dialogsDB.get(contactKey)?.size === 1) {
                //     this.view.msgArea.append(
                //         new BaseElement('div', ['space']).getElement()
                //     );
                // }
            }
        }
    }

    public generateContactKey(from: string, to: string): string {
        const contactKey = [from, to].sort().join('=');
        return contactKey;
    }
}

const dialogBoxController = new DialogBoxController();
export default dialogBoxController;
