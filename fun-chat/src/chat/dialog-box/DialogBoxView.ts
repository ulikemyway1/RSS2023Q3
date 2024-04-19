import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import dialogBoxModel from './DialogBoxModel';
import './dialogBox.scss';
class DialogBoxView {
    private view = new BaseElement('section', ['dialog-box']).getElement();
    private model = dialogBoxModel;
    public header = new BaseElement('div', ['dialog-box__header']).getElement();
    msgArea = new BaseElement('div', ['dialog-box__msg-area']).getElement();

    private inputWrapper = new BaseElement('div', [
        'dialog-box__input-wrapper',
    ]).getElement();

    public inputField = document.createElement('textarea');

    public sendMessageBtn = new ButtonElement(
        'Send',
        ['button', 'send-btn'],
        true
    ).getButton();

    public msgAreaNoContactTip = new BaseElement(
        'div',
        ['dialog-box__tip', 'no-contact'],
        'Choose a contact to start chating'
    ).getElement();
    public msgAreaNoChatHistoryTip = new BaseElement(
        'div',
        ['dialog-box__tip', 'no-history', 'hidden'],
        'There are no messages yet... '
    ).getElement();

    constructor() {
        this.inputField.classList.add('dialog-box__input-field');
        this.inputField.disabled = true;
        this.inputField.placeholder = 'Type here...';
        this.inputField.addEventListener('input', () => {
            if (this.inputField.value.trim().length > 0) {
                this.sendMessageBtn.disabled = false;
            } else {
                this.sendMessageBtn.disabled = true;
            }
        });

        this.sendMessageBtn.addEventListener('click', () => {
            const message = this.inputField.value;
            const targetContact = this.model.getCurrentContact();
            if (targetContact) {
                const targetContactName = targetContact.getContactName();
                const messageData = {
                    id: `MSG_SEND:${targetContactName}:${crypto.randomUUID()}`,
                    type: 'MSG_SEND',
                    payload: {
                        message: {
                            to: targetContactName,
                            text: message,
                        },
                    },
                };
                ws.send(JSON.stringify(messageData));
            }
        });

        this.msgArea.append(
            this.msgAreaNoChatHistoryTip,
            this.msgAreaNoContactTip
        );

        this.inputWrapper.append(this.inputField, this.sendMessageBtn);

        this.view.append(this.header, this.msgArea, this.inputWrapper);
    }

    public getView() {
        return this.view;
    }

    public resetView() {
        while (this.header.lastElementChild) {
            this.header.lastElementChild.remove();
        }
        while (this.msgArea.lastElementChild) {
            this.msgArea.lastElementChild.remove();
        }
        this.msgAreaNoChatHistoryTip.classList.remove('hidden');
        this.msgArea.append(this.msgAreaNoChatHistoryTip);
        this.inputField.value = '';
    }

    public appendMsg(msgCard: HTMLElement): void {
        this.msgAreaNoChatHistoryTip.classList.add('hidden');
        this.msgArea.append(msgCard);
    }
}

const dialogBoxView = new DialogBoxView();
export default dialogBoxView;
