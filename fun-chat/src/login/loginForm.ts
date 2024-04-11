import ws from '..';
import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import './login.scss';

export default class LoginForm {
    private loginForm: HTMLFormElement = document.createElement('form');

    private submitBtn = new BaseElement(
        'button',
        ['button', 'login-btn'],
        'Log in'
    ).getElement();

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

    private userNameValidationMsg = new BaseElement('div', [
        'validation-msg',
    ]).getElement();
    private passwordValidationMsg = new BaseElement('div', [
        'validation-msg',
    ]).getElement();
    private userNameLabel = this.createLabel(
        'Username',
        this.userNameInput,
        this.userNameValidationMsg
    );
    private passwordLabel = this.createLabel(
        'Password',
        this.passWordInput,
        this.passwordValidationMsg
    );

    constructor() {
        this.loginForm.classList.add('login-form');
        this.passWordInput.required = true;
        this.userNameInput.required = true;

        this.loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formIsValid = this.formValidation();
            if (formIsValid) {
                const userData = {
                    id: crypto.randomUUID(),
                    type: 'USER_LOGIN',
                    payload: {
                        user: {
                            login: this.userNameInput.value,
                            password: this.passWordInput.value,
                        },
                    },
                };
                console.log(JSON.stringify(userData));
                ws.send(JSON.stringify(userData));
            }
        });

        this.userNameInput.autofocus = true;
        this.loginForm.append(
            this.userNameLabel,
            this.passwordLabel,
            this.submitBtn
        );
    }

    public getForm(): HTMLFormElement {
        return this.loginForm;
    }

    private createLabel(
        title: string,
        forInput: HTMLInputElement,
        validationMessage: HTMLElement
    ): HTMLLabelElement {
        const label = document.createElement('label');
        label.classList.add('login-form__label');
        label.htmlFor = forInput.name;
        label.textContent = title;
        label.append(forInput, validationMessage);
        return label;
    }

    private formValidation(): boolean {
        const hasValidUserName = this.userNameInputValidation();
        const hasValidPassword = this.passWordInputValidation();
        return hasValidPassword && hasValidUserName;
    }

    private userNameInputValidation(): boolean {
        this.userNameValidationMsg.textContent = '';
        const userName = this.userNameInput.value;
        if (/^[A-Z][a-zA-Z]{2,19}$/.test(userName)) {
            this.userNameInput.classList.add('valid');
            this.userNameInput.classList.remove('invalid');
            return true;
        } else {
            this.userNameInput.classList.add('invalid');
            this.userNameInput.classList.remove('valid');
            if (userName.length < 3) {
                this.userNameValidationMsg.textContent =
                    'The username must be no shorter tnan 3 characters';
            } else if (!/^[A-Z]/.test(userName)) {
                this.userNameValidationMsg.textContent =
                    'The username must start with a capital letter';
            }
        }

        return false;
    }

    private passWordInputValidation(): boolean {
        this.passwordValidationMsg.textContent = '';
        const password = this.passWordInput.value;
        if (/^(?=.*[!|?])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
            this.passWordInput.classList.add('valid');
            this.passWordInput.classList.remove('invalid');
            return true;
        } else {
            this.passWordInput.classList.add('invalid');
            this.passWordInput.classList.remove('valid');
            if (password.length < 8) {
                this.passwordValidationMsg.textContent =
                    'The password must be no shorter than 8 characters';
            } else if (!/^(?=.*[!|?])/.test(password)) {
                this.passwordValidationMsg.textContent =
                    'The password must contain atleast one ! or ? symbols';
            } else if (!/(?=.*[A-Z])/.test(password)) {
                this.passwordValidationMsg.textContent =
                    'The password must contain atleast one capital letter';
            }
        }

        return false;
    }
}
