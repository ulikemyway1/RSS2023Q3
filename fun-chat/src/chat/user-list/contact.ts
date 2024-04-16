import BaseElement from '../../utils/BaseElement';

export default class Contact {
    private view = new BaseElement('div', ['contact']).getElement();
    private nameBox = new BaseElement('div', [
        'contact__name-box',
    ]).getElement();
    private statusBox = new BaseElement('div', [
        'contact__status-box',
    ]).getElement();
    private msgCountBox = new BaseElement(
        'div',
        ['contact__msg-count'],
        '0'
    ).getElement();
    private name: string;
    private statusText = new BaseElement('span', [
        'contact__status-text',
    ]).getElement();
    constructor(name: string, status: boolean) {
        this.name = name;
        this.nameBox.textContent = name;
        this.statusBox.textContent = name[0].toUpperCase();
        if (status) {
            this.statusBox.classList.add('online');
            this.statusText.textContent = 'Online';
            this.statusText.classList.add('online-text');
        } else {
            this.statusBox.classList.add('offline');
            this.statusText.textContent = 'Offline';
            this.statusText.classList.add('offlinet-text');
        }
        this.view.append(
            this.statusBox,
            this.nameBox,
            this.msgCountBox,
            this.statusText
        );
    }

    public getView(): HTMLElement {
        return this.view;
    }
    public getContactName(): string {
        return this.name;
    }
    public updateContactStatus(isActive: boolean): void {
        if (isActive) {
            this.statusBox.classList.remove('offline');
            this.statusBox.classList.add('online');
            this.statusText.textContent = 'Online';
            this.statusText.classList.add('online-text');
            this.statusText.classList.remove('offline-text');
        } else {
            this.statusBox.classList.add('offline');
            this.statusBox.classList.remove('online');
            this.statusText.textContent = 'Offlinet';
            this.statusText.classList.remove('online-text');
            this.statusText.classList.add('offline-text');
        }
    }
}
