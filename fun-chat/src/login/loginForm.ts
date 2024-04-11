import InputElement from '../utils/InputElement';
import './login.scss';

export default class LoginForm {
    private loginForm: HTMLFormElement = document.createElement('form');

    private userNameInput = new InputElement(
        'text',
        'userName',
        '',
        ['login-form__input'],
        'username'
    ).getInput();

    private passWordInput = new InputElement(
        'password',
        'password',
        '',
        ['login-form__input'],
        'password'
    ).getInput();

    constructor() {
        this.loginForm.classList.add('login-form');
        this.loginForm.append(
            this.createLabel('Username', this.userNameInput),
            this.createLabel('Password', this.passWordInput)
        );
    }

    public getForm(): HTMLFormElement {
        return this.loginForm;
    }

    private createLabel(
        title: string,
        forInput: HTMLInputElement
    ): HTMLLabelElement {
        const label = document.createElement('label');
        label.classList.add('login-form__label');
        label.htmlFor = forInput.name;
        label.textContent = title;
        label.append(forInput);
        return label;
    }
}
