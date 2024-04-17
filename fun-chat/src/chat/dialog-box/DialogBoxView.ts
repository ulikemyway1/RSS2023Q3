import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import dialogBoxModel from './DialogBoxModel';
import './dialogBox.scss';
class DialogBoxView {
    private view = new BaseElement('section', ['dialog-box']).getElement();
    private model = dialogBoxModel;
    public header = new BaseElement('div', ['dialog-box__header']).getElement();
    private msgArea = new BaseElement(
        'div',
        ['dialog-box__msg-area'],
        'Choose a contact to start chating'
    ).getElement();

    private inputWrapper = new BaseElement('div', [
        'dialog-box__input-wrapper',
    ]).getElement();

    public inputField = document.createElement('textarea');

    private sendMessageBtn = new ButtonElement(
        'Send',
        ['button', 'send-btn'],
        true
    ).getButton();

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
            const messageData = {
                id: `MSG_SEND:${crypto.randomUUID()}`,
                type: 'MSG_SEND',
                payload: {
                    message: {
                        to: this.model.getCurrentContact()?.getContactName(),
                        text: message,
                    },
                },
            };
            ws.send(JSON.stringify(messageData));
        });

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
        this.inputField.value = '';
    }
}

const dialogBoxView = new DialogBoxView();
export default dialogBoxView;
