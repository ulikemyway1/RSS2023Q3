import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import InputElement from '../../utils/InputElement';
import './dialogBox.scss';
class DialogBoxView {
    private view = new BaseElement('section', ['dialog-box']).getElement();

    private header = new BaseElement('div', [
        'dialog-box__header',
    ]).getElement();

    private msgArea = new BaseElement(
        'div',
        ['dialog-box__msg-area'],
        'Choose a contact to start chating'
    ).getElement();

    private inputWrapper = new BaseElement('div', [
        'dialog-box__input-wrapper',
    ]).getElement();

    private inputField = document.createElement('textarea');

    private sendMessageBtn = new ButtonElement(
        'Send',
        ['button', 'send-btn'],
        true
    ).getButton();

    constructor() {
        this.inputField.classList.add('dialog-box__input-field');
        this.inputField.disabled = true;
        this.inputField.placeholder = 'Type here...';
        this.inputWrapper.append(this.inputField, this.sendMessageBtn);

        this.view.append(this.header, this.msgArea, this.inputWrapper);
    }

    public getView() {
        return this.view;
    }
}

const dialogBoxView = new DialogBoxView();
export default dialogBoxView;
