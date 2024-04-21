import app from '../../app/app';
import {
    FetchMessageHistoryResponse,
    MessageDeletionResponse,
    MessageDeliveryStatusChange,
    MessageInfoResponse,
    MessageReadStatusChange,
    MessageTextEditing,
    MessageTextEditingNotification,
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
    public dividerIsAppended = false;

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
            | MessageReadStatusChange
            | MessageDeliveryStatusChange
            | MessageTextEditing
            | MessageTextEditingNotification
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
        } else if (response.type === 'MSG_READ') {
            const msgID = response.payload.message.id;
            this.removeDivider();
            if (response.id) {
                const contactName = response.id.split(':')[1];
                this.model.unreadMessages.get(contactName)?.delete(msgID);
                contactsListModel.getContactCard(contactName)?.updateMsgCount();
                this.model
                    .getMessageCard(response.payload.message.id)
                    ?.setStatus('isReaded');
            } else {
                this.model.markAsRead(msgID);
            }
        } else if (response.type === 'MSG_DELIVER') {
            const msgID = response.payload.message.id;
            this.model.markAsDelivered(msgID);
        } else if (response.type === 'MSG_EDIT') {
            const msgID = response.payload.message.id;
            const messageCard = this.model.getMessageCard(msgID);
            messageCard?.setStatus('isEdited');
            messageCard?.editMsgText(response.payload.message.text);
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
                if (messageInfo.to === app.getState().getItem('userName')) {
                    this.appenDivider(messageInfo.status.isReaded);
                }

                this.view.appendMsg(msgCard.getView());
                if (this.dividerIsAppended) {
                    this.view.divider.scrollIntoView({ block: 'center' });
                } else {
                    msgCard.getView().scrollIntoView();
                }
            }
        }
    }

    public appenDivider(isReaded: boolean): void {
        if (!isReaded && !this.dividerIsAppended) {
            this.view.appendDivider();
            this.dividerIsAppended = true;
        }
    }

    public removeDivider(): void {
        this.view.removeDivider();
        this.dividerIsAppended = false;
    }

    public generateContactKey(from: string, to: string): string {
        const contactKey = [from, to].sort().join('=');
        return contactKey;
    }
}

const dialogBoxController = new DialogBoxController();
export default dialogBoxController;
