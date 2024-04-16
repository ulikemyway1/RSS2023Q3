import app from '../../app/app';
import BaseElement from '../../utils/BaseElement';
import userListModel from './ContactsListModel';
import './contactsList.scss';

class UserListView {
    model = userListModel;
    private view = new BaseElement('section', ['user-list']).getElement();
    private searchBox = new BaseElement('div', [
        'user-list__search-box',
    ]).getElement();
    private usersListBox = new BaseElement('div', [
        'user-list__user-list-box',
    ]).getElement();
    constructor() {
        this.view.append(this.searchBox, this.usersListBox);
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public reloadView(type: 'USER_ACTIVE' | 'USER_INACTIVE'): void {
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
