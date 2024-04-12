import BaseElement from '../utils/BaseElement';
import LoginForm from './loginForm';

class LoginPage {
    private loginPage = new BaseElement('section', ['login-page']).getElement();
    private loginForm = new LoginForm();
    constructor() {
        this.loginPage.append(this.loginForm.getForm());
    }

    public getLoginPage(): HTMLElement {
        return this.loginPage;
    }

    public getLoginForm(): LoginForm {
        return this.loginForm;
    }
}

const loginPage = new LoginPage();

export default loginPage;
