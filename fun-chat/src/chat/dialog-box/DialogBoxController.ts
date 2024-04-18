import { SentMessageResponse } from '../../communication/ResponseRedirector';
import ws from '../../communication/socket';
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
    }

    public handleResponse(response: SentMessageResponse) {
        if (response.type === 'MSG_SEND' && response.id) {
            const msgID = response.id.split(':')[2];
            console.log(msgID);
            this.model.addMessage(
                response.payload.message.to,
                msgID,
                response.payload.message
            );
            const msgCard = this.model.getMessageCard(
                response.payload.message.to,
                msgID
            );
            console.log(this.model.dialogsDB);
            if (msgCard) {
                if (
                    this.model.dialogsDB.get(response.payload.message.to)
                        ?.size === 1
                ) {
                    this.view.msgArea.textContent = '';
                    this.view.msgArea.append(
                        new BaseElement('div', ['space']).getElement()
                    );
                }
                this.view.appendMsg(msgCard);
            }
        }
    }
}

const dialogBoxController = new DialogBoxController();
export default dialogBoxController;
