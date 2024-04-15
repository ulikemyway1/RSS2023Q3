import BaseElement from '../../utils/BaseElement';

export default class Contact {
    private view = new BaseElement('div', ['contact']).getElement();
    private nameBox = new BaseElement('div', [
        'contact__name-box',
    ]).getElement();
    private statusBox = new BaseElement('div', [
        'contact__status-box',
    ]).getElement();
    private msgCountBox = new BaseElement('div', [
        'contact__msg-count',
    ]).getElement();
    private name: string;
    constructor(name: string, status: boolean) {
        this.name = name;
        this.nameBox.textContent = name;
        this.statusBox.textContent = name[0].toUpperCase();
        if (status) {
            this.statusBox.classList.add('online');
        } else {
            this.statusBox.classList.add('offline');
        }
        this.view.append(this.statusBox, this.nameBox, this.msgCountBox);
    }

    public getView(): HTMLElement {
        return this.view;
    }
    public getContactName(): string {
        return this.name;
    }
}
