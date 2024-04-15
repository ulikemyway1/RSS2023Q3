import app from '../../app/app';
import BaseElement from '../../utils/BaseElement';
import userListModel from './UserListModel';
import './userList.scss';

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
        this.model
            .getInactiveUsers()
            .forEach((user) => this.usersListBox.append(user.getView()));
    }

    public getView(): HTMLElement {
        return this.view;
    }

    public reloadView(): void {
        while (this.usersListBox.lastElementChild) {
            this.usersListBox.lastElementChild.remove();
        }
        this.model.getActiveUsers().forEach((user) => {
            if (user.getContactName() !== app.getState().getItem('userName')) {
                this.usersListBox.append(user.getView());
            }
        });
        this.model.getInactiveUsers().forEach((user) => {
            if (user.getContactName() !== app.getState().getItem('userName')) {
                this.usersListBox.append(user.getView());
            }
        });
    }
}

const userListView = new UserListView();
export default userListView;
