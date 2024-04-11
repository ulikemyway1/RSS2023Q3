import BaseElement from '../utils/BaseElement';
import LoginForm from './loginForm';

export default class LoginPage {
    private loginPage = new BaseElement('section', ['login-page']).getElement();

    constructor() {
        this.loginPage.append(new LoginForm().getForm());
    }

    public getLoginPage(): HTMLElement {
        return this.loginPage;
    }
}
