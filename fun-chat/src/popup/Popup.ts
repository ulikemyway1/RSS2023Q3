import app from '../app/app';
import BaseElement from '../utils/BaseElement';
import './popup.scss';

export default class Popup {
    private view = new BaseElement('aside', [
        'popup',
        'unresolved',
    ]).getElement();
    private msgBox = new BaseElement('span', ['popup__msg-box']).getElement();
    private loader = new BaseElement('div', ['popup__loader']).getElement();

    constructor() {
        this.msgBox.textContent = popupStatus.reconnection;
        this.view.append(this.msgBox, this.loader);
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public setResolved(): void {
        this.view.classList.add('resolved');
        this.view.classList.remove('unresolved');
        this.msgBox.textContent = popupStatus.success;
        setTimeout(() => this.view.remove(), 2000);
        app.container.classList.remove('fade');
    }

    public setUnresolved(): void {
        this.view.classList.remove('resolved');
        this.view.classList.add('unresolved');
        this.msgBox.textContent = popupStatus.reconnection;
        app.container.classList.add('fade');
    }
}

enum popupStatus {
    reconnection = 'Connection lost. Whait, please! Trying to reconnect...',
    success = 'Reconnection completed! :) Enjoy!',
}
