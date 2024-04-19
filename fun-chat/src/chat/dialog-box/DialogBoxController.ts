import {
    FetchMessageHistoryResponse,
    MessageInfoResponse,
    SentMessageResponse,
} from '../../communication/ResponseRedirector';
import BaseElement from '../../utils/BaseElement';
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
        response: SentMessageResponse | FetchMessageHistoryResponse
    ) {
        if (response.type === 'MSG_SEND') {
            this.pullMessage(response.payload.message);
        } else if (response.type === 'MSG_FROM_USER') {
            response.payload.messages.forEach((messageInfo) =>
                this.pullMessage(messageInfo)
            );
        }
    }

    private pullMessage(messageInfo: MessageInfoResponse) {
        const contactKey = this.generateContactKey(
            messageInfo.from,
            messageInfo.to
        );
        this.model.addMessage(contactKey, messageInfo.id, messageInfo);
        const msgCard = this.model.getMessageCard(contactKey, messageInfo.id);
        if (msgCard) {
            if (
                messageInfo.to ===
                    this.model.getCurrentContact()?.getContactName() ||
                messageInfo.from ===
                    this.model.getCurrentContact()?.getContactName()
            ) {
                this.view.appendMsg(msgCard);
                msgCard.scrollIntoView();
                if (this.model.dialogsDB.get(contactKey)?.size === 1) {
                    this.view.msgArea.append(
                        new BaseElement('div', ['space']).getElement()
                    );
                }
            }
        }
    }

    private generateContactKey(from: string, to: string): string {
        const contactKey = [from, to].sort().join('=');
        return contactKey;
    }
}

const dialogBoxController = new DialogBoxController();
export default dialogBoxController;
