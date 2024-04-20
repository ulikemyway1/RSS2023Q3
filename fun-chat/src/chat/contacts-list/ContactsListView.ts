import app from '../../app/app';
import ws from '../../communication/socket';
import BaseElement from '../../utils/BaseElement';
import generateId from '../../utils/generateID';
import dialogBoxController from '../dialog-box/DialogBoxController';
import dialogBoxModel from '../dialog-box/DialogBoxModel';
import dialogBoxView from '../dialog-box/DialogBoxView';
import userListModel from './ContactsListModel';
import './contactsList.scss';
import SearchBox from './searchBox';

class UserListView {
    model = userListModel;
    private view = new BaseElement('section', ['contacts-list']).getElement();

    private contactsListBox = new BaseElement('div', [
        'contacts-list__contacts-list-box',
    ]).getElement();

    private serachBox = new SearchBox();

    constructor() {
        this.contactsListBox.addEventListener('click', (event) => {
            if (event.target && event.target instanceof HTMLElement) {
                const contact = event.target.closest('.contact');
                if (contact) {
                    const contactNameBox =
                        contact.querySelector('.contact__name-box');
                    if (contactNameBox) {
                        const contactName =
                            contactNameBox.textContent || undefined;
                        const contactCard =
                            this.model.getContactCard(contactName);
                        if (
                            contactCard &&
                            dialogBoxModel.getCurrentContact() !== contactCard
                        ) {
                            dialogBoxController.resetDialog();
                            dialogBoxController.updateDialogHeader(contactCard);
                            dialogBoxView.inputField.disabled = false;
                            const msgKey =
                                dialogBoxController.generateContactKey(
                                    app.getState().getItem('userName'),
                                    contactCard.getContactName()
                                );
                            dialogBoxController.model
                                .getMessageHistory(msgKey)
                                ?.forEach((messageController) => {
                                    dialogBoxView.msgAreaNoChatHistoryTip.classList.add(
                                        'hidden'
                                    );
                                    dialogBoxView.msgArea.append(
                                        messageController.getView()
                                    );
                                });
                        }
                    }
                }
            }
        });
        this.view.append(this.serachBox.getView(), this.contactsListBox);
        this.model.getActiveContacts();
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public reloadView(): void {
        while (this.contactsListBox.lastElementChild) {
            this.contactsListBox.lastElementChild.remove();
        }
        this.model.getActiveContacts().forEach((contact) => {
            if (
                contact.getContactName() !== app.getState().getItem('userName')
            ) {
                this.contactsListBox.append(contact.getView());
            }
        });
        this.model.getInactiveContacts().forEach((contact) => {
            if (
                contact.getContactName() !== app.getState().getItem('userName')
            ) {
                this.contactsListBox.append(contact.getView());
            }
        });
    }
}

const userListView = new UserListView();
export default userListView;
