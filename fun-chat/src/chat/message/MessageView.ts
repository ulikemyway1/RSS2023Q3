import BaseElement from '../../utils/BaseElement';
import ContextMenu from './contextMenu';
import './message.scss';

export default class MessageView {
    private view: HTMLElement = new BaseElement('div', [
        'message',
    ]).getElement();
    private msgContentBox = new BaseElement('pre', [
        'message__content',
    ]).getElement();
    private msgTime = new BaseElement('span', ['message__time']).getElement();
    private msgDeliveryStatus = new BaseElement('span', [
        'message__deliv-status',
    ]).getElement();
    private msgEditStatus = new BaseElement('span', [
        'message__edit-status',
    ]).getElement();

    constructor(
        msgContent: string,
        msgTime: string,
        setMsgDeliveryStatus: string,
        msgIsEdit: boolean,
        isOwnMessage: boolean,
        msgDataID: string
    ) {
        this.msgContentBox.textContent = msgContent;
        this.msgTime.textContent = msgTime;
        this.msgDeliveryStatus.textContent = setMsgDeliveryStatus;
        if (msgIsEdit) this.msgEditStatus.textContent = 'Edit';
        if (isOwnMessage) {
            this.view.classList.add('own-message');
        }
        this.view.dataset.id = msgDataID;
        this.view.append(
            this.msgContentBox,
            this.msgTime,
            this.msgDeliveryStatus,
            this.msgEditStatus
        );
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public setMsgContent(msgContent: string): void {
        this.msgContentBox.textContent = msgContent;
    }

    public setMsgTime(msgTime: string): void {
        this.msgTime.textContent = msgTime;
    }

    public setMsgDeliveryStatus(msgStatus: string): void {
        this.msgDeliveryStatus.textContent = msgStatus;
    }

    public markMsgEdited(): void {
        this.msgEditStatus.textContent = 'Edit';
    }
}
