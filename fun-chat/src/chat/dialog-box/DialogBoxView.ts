import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import generateId from '../../utils/generateID';
import ContextMenu from '../message/contextMenu';
import dialogBoxModel from './DialogBoxModel';
import './dialogBox.scss';
class DialogBoxView {
    private view = new BaseElement('section', ['dialog-box']).getElement();
    private model = dialogBoxModel;
    public header = new BaseElement('div', ['dialog-box__header']).getElement();
    msgArea = new BaseElement('div', ['dialog-box__msg-area']).getElement();

    public inputWrapper = new BaseElement('div', [
        'dialog-box__input-wrapper',
    ]).getElement();

    public inputField = document.createElement('textarea');

    public sendMessageBtn = new ButtonElement(
        'Send',
        ['button', 'send-btn'],
        true
    ).getButton();

    public divider = new BaseElement(
        'div',
        ['divider'],
        'New Messages'
    ).getElement();

    public cancelMessageEditingBtn = new ButtonElement(
        'Cancel',
        ['button', 'cancel-btn', 'hidden'],
        true
    ).getButton();

    public saveMessageChangesBtn = new ButtonElement(
        'Save',
        ['button', 'savee-btn', 'hidden'],
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

        this.sendMessageBtn.addEventListener('click', () => {
            this.sendMessage();
        });

        this.addSendEventListenerToInputField();

        this.inputField.addEventListener('keydown', (event) => {
            if (
                event.code === 'Enter' &&
                !event.shiftKey &&
                this.inputField.value.length > 0
            ) {
                event.preventDefault();
                if (this.model.getState() === 'normal') {
                    this.sendMessage();
                } else {
                    if (
                        this.inputField.value !==
                        this.model
                            .getMessageCard(this.model.getMsgID())
                            ?.model.getMessageContecnt()
                    )
                        this.sendMessageChanges();
                }
            } else if (event.code === 'Enter' && event.shiftKey) {
                this.inputField.value += '\n';
            }
        });

        this.msgArea.append(
            this.msgAreaNoChatHistoryTip,
            this.msgAreaNoContactTip
        );

        this.inputWrapper.append(
            this.inputField,
            this.sendMessageBtn,
            this.saveMessageChangesBtn,
            this.cancelMessageEditingBtn
        );

        this.view.append(this.header, this.msgArea, this.inputWrapper);

        this.msgArea.addEventListener('contextmenu', (event) => {
            if (
                event.target &&
                event.target instanceof HTMLElement &&
                event.target.closest('.message')
            ) {
                event.preventDefault();

                const messageBox = event.target.closest('.message.own-message');
                if (messageBox instanceof HTMLElement) {
                    const contextMenu = new ContextMenu(
                        messageBox.dataset.id || 'null'
                    );
                    this.msgArea
                        .querySelectorAll('.context-menu')
                        .forEach((item) => item.remove());
                    messageBox.append(contextMenu.getView());
                }
            }
        });

        this.msgArea.addEventListener('wheel', () => {
            this.notifyAboutReading();
        });

        this.msgArea.addEventListener('click', () => this.notifyAboutReading());

        this.cancelMessageEditingBtn.addEventListener('click', () =>
            this.cancelChanges()
        );

        this.saveMessageChangesBtn.addEventListener('click', () =>
            this.sendMessageChanges()
        );

        document.body.addEventListener('click', (event) => {
            document.body
                .querySelectorAll('.context-menu')
                .forEach((item) => item.remove());
        });
    }

    public cancelChanges(): void {
        this.inputField.value = '';
        this.cancelMessageEditingBtn.classList.add('hidden');
        this.saveMessageChangesBtn.disabled = true;
        this.saveMessageChangesBtn.classList.add('hidden');
        this.sendMessageBtn.disabled = true;
        this.sendMessageBtn.classList.remove('hidden');
        this.inputWrapper.classList.remove('edit-mode');
        this.model.setMsgID('');
        this.removeSaveChangesListenerFromInputField();
        this.addSendEventListenerToInputField();
        this.model.setState('normal');
    }

    private sendMessage(): void {
        const message = this.inputField.value;
        const targetContact = this.model.getCurrentContact();
        if (targetContact) {
            const targetContactName = targetContact.getContactName();
            const messageData = {
                id: `MSG_SEND:${targetContactName}:${generateId()}`,
                type: 'MSG_SEND',
                payload: {
                    message: {
                        to: targetContactName,
                        text: message,
                    },
                },
            };
            ws.send(JSON.stringify(messageData));
            this.inputField.value = '';
            this.sendMessageBtn.disabled = true;
            this.notifyAboutReading();
        }
    }

    private sendMessageChanges(): void {
        const message = this.inputField.value;
        const targetContacName = this.model
            .getCurrentContact()
            ?.getContactName();
        const msgID = this.model.getMsgID();

        if (targetContacName && msgID) {
            const messageData = {
                id: `MSG_EDIT:${targetContacName}:${generateId()}`,
                type: 'MSG_EDIT',
                payload: {
                    message: {
                        id: msgID,
                        text: message,
                    },
                },
            };

            ws.send(JSON.stringify(messageData));
        }
        this.cancelChanges();
    }

    public getView() {
        return this.view;
    }

    public addSendEventListenerToInputField() {
        this.inputField.addEventListener('input', () => {
            if (this.inputField.value.length > 0) {
                this.sendMessageBtn.disabled = false;
            } else {
                this.sendMessageBtn.disabled = true;
            }
        });
    }

    public removeSendEventListenerFromInputField() {
        this.inputField.removeEventListener('input', () => {
            if (this.inputField.value.length > 0) {
                this.sendMessageBtn.disabled = false;
            } else {
                this.sendMessageBtn.disabled = true;
            }
        });
    }

    public addSaveChangesEventListenerToInputField() {
        this.inputField.addEventListener('input', () => {
            if (
                this.inputField.value.length > 0 &&
                this.inputField.value !==
                    this.model
                        .getMessageCard(this.model.getMsgID())
                        ?.model.getMessageContecnt()
            ) {
                this.saveMessageChangesBtn.disabled = false;
            } else {
                this.saveMessageChangesBtn.disabled = true;
            }
        });
    }

    public removeSaveChangesListenerFromInputField() {
        this.inputField.removeEventListener('input', () => {
            if (
                this.inputField.value.length > 0 &&
                this.inputField.value !==
                    this.model
                        .getMessageCard(this.model.getMsgID())
                        ?.model.getMessageContecnt()
            ) {
                this.saveMessageChangesBtn.disabled = false;
            } else {
                this.saveMessageChangesBtn.disabled = true;
            }
        });
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

    public notifyAboutReading(): void {
        const targetContact = this.model.getCurrentContact()?.getContactName();
        if (targetContact) {
            this.model.unreadMessages.get(targetContact)?.forEach((msgID) => {
                const requestData = {
                    id: `MSG_READ:${targetContact}:${generateId()}`,
                    type: 'MSG_READ',
                    payload: {
                        message: {
                            id: msgID,
                        },
                    },
                };
                ws.send(JSON.stringify(requestData));
            });
        }
    }

    public appendDivider() {
        this.msgArea.append(this.divider);
    }
    public removeDivider() {
        this.divider.remove();
    }
}

const dialogBoxView = new DialogBoxView();
export default dialogBoxView;
