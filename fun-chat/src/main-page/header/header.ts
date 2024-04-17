import app from '../../app/app';
import contactsListController from '../../chat/contacts-list/ContactsListController';
import userController from '../../user/UserController';
import userView from '../../user/UserView';
import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import './header.scss';
export default class Header {
    private header = new BaseElement('header', ['header']).getElement();
    constructor() {
        const appTittle = new BaseElement(
            'span',
            ['header__app-title'],
            'FUN-CHAT'
        ).getElement();
        const currentUser = userView.getUeserView();
        const logOutBtn = new ButtonElement(
            'Log out',
            ['header__logout-btn', 'button'],
            false
        ).getButton();

        logOutBtn.addEventListener('click', () => {
            userController.logOut();
            app.getState().setItem('userPassword', undefined);
            contactsListController.model.removeFromActive(
                app.getState().getItem('userName')
            );
        });
        this.header.append(appTittle, currentUser, logOutBtn);
    }

    public getHeader() {
        return this.header;
    }
}
