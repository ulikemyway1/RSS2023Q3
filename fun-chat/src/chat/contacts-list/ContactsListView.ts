import app from '../../app/app';
import BaseElement from '../../utils/BaseElement';
import InputElement from '../../utils/InputElement';
import dialogBoxController from '../dialog-box/DialogBoxController';
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
                            dialogBoxController.selectedContact !== contactCard
                        ) {
                            dialogBoxController.updateDialogHeader(contactCard);
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
