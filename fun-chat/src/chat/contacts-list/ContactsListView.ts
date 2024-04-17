import app from '../../app/app';
import BaseElement from '../../utils/BaseElement';
import InputElement from '../../utils/InputElement';
import userListModel from './ContactsListModel';
import './contactsList.scss';
import SearchBox from './searchBox';

class UserListView {
    model = userListModel;
    private view = new BaseElement('section', ['contacts-list']).getElement();

    private usersListBox = new BaseElement('div', [
        'contacts-list__contacts-list-box',
    ]).getElement();

    private serachBox = new SearchBox();

    constructor() {
        this.view.append(this.serachBox.getView(), this.usersListBox);
        this.model.getActiveContacts();
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public reloadView(): void {
        while (this.usersListBox.lastElementChild) {
            this.usersListBox.lastElementChild.remove();
        }
        this.model.getActiveContacts().forEach((contact) => {
            if (
                contact.getContactName() !== app.getState().getItem('userName')
            ) {
                this.usersListBox.append(contact.getView());
            }
        });
        this.model.getInactiveContacts().forEach((contact) => {
            if (
                contact.getContactName() !== app.getState().getItem('userName')
            ) {
                this.usersListBox.append(contact.getView());
            }
        });
    }
}

const userListView = new UserListView();
export default userListView;
