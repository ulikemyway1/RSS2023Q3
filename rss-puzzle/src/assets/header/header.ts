import appLoader from '../..';
import ControlPanel from '../control-panel/controlPanels';
import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import deleteUser from '../utils/deleteUser';
import './header.scss';

export default class Header {
    header: HTMLElement | null = null;

    constructor() {
        this.header = new BaseElement('header', undefined, [
            'header',
        ]).getElement();
    }

    private init() {
        const logOutBtn = new InputElement(
            'button',
            'Logout',
            undefined,
            undefined,
            ['button', 'logout-btn']
        ).getElement();
        logOutBtn.addEventListener('click', () => {
            ControlPanel.saveUserSettings('default');
            deleteUser();
            while (document.body.lastChild) document.body.lastChild.remove();
            appLoader.load();
        });
        if (this.header) {
            this.header.append(logOutBtn);
        }
    }

    getElement() {
        this.init();
        return this.header;
    }
}
