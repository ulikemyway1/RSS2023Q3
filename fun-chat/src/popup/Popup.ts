import BaseElement from '../utils/BaseElement';
import './popup.scss';

export default class Popup {
    private view = new BaseElement('aside', [
        'popup',
        'unresolved',
    ]).getElement();
    private msgBox = new BaseElement('span', ['popup__msg-box']).getElement();

    constructor(msg: string) {
        this.msgBox.textContent = msg;
        this.view.append(this.msgBox);
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public setResolved(): void {
        this.view.classList.add('resolved');
        this.view.classList.remove('unresolved');
        setTimeout(() => this.view.remove(), 3000);
    }
}
