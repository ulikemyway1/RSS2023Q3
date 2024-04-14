import ws from '../..';
import app from '../../app/app';
import userModel from '../../user/UserModel';
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
            const requestData = {
                id: `USER_LOGOUT:${crypto.randomUUID()}`,
                type: 'USER_LOGOUT',
                payload: {
                    user: {
                        login: userModel.getUsername(),
                        password: app.getState().getItem('userPassword'),
                    },
                },
            };
            ws.send(JSON.stringify(requestData));
        });
        this.header.append(appTittle, currentUser, logOutBtn);
    }

    public getHeader() {
        return this.header;
    }
}
