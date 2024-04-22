import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import dialogBoxModel from '../dialog-box/DialogBoxModel';
import dialogBoxView from '../dialog-box/DialogBoxView';

export default class ContextMenu {
    private view = new BaseElement('div', ['context-menu']).getElement();
    private deleteBtn = new ButtonElement(
        'Delete',
        ['button', 'delete-btn'],
        false
    ).getButton();
    private editBtn = new ButtonElement(
        'Edit',
        ['button', 'edit-btn'],
        false
    ).getButton();
    private dataID: string;

    constructor(dataID: string) {
        this.dataID = dataID;
        const wrapper = new BaseElement('ul', [
            'context-menu__wrapper',
        ]).getElement();
        const editLI = new BaseElement('li', ['context-menu__li']).getElement();
        const deleteLI = new BaseElement('li', [
            'context-menu__li',
        ]).getElement();
        editLI.append(this.editBtn);
        deleteLI.append(this.deleteBtn);
        wrapper.append(editLI, deleteLI);
        this.view.append(wrapper);
        this.addListeners(this.dataID);
    }

    public getView() {
        return this.view;
    }

    public addListeners(dataID: string): void {
        const contactKey = dataID.split('|')[0];
        const messageId = dataID.split('|')[1];
        this.deleteBtn.addEventListener('click', () => {
            const dataRequest = {
                id: `MSG_DELETE:${contactKey}`,
                type: 'MSG_DELETE',
                payload: {
                    message: {
                        id: messageId,
                    },
                },
            };

            ws.send(JSON.stringify(dataRequest));
        });

        this.editBtn.addEventListener('click', () => {
            dialogBoxModel.setState('editing');

            const contactKey = dataID.split('|')[0];
            const messageId = dataID.split('|')[1];

            dialogBoxModel.setMsgID(messageId);

            const cancelBtn = dialogBoxView.cancelMessageEditingBtn;
            const saveBtn = dialogBoxView.saveMessageChangesBtn;
            const senBtn = dialogBoxView.sendMessageBtn;

            cancelBtn.classList.remove('hidden');
            cancelBtn.disabled = false;

            saveBtn.classList.remove('hidden');

            senBtn.classList.add('hidden');

            dialogBoxView.inputWrapper.classList.add('edit-mode');

            dialogBoxView.inputField.value = String(
                dialogBoxModel
                    .getMessageCard(messageId, contactKey)
                    ?.model.getMessageContecnt()
            );

            dialogBoxView.removeSendEventListenerFromInputField();
            dialogBoxView.addSaveChangesEventListenerToInputField();
        });
    }
}
