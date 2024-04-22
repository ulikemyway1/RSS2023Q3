import app from '../app/app';
import contactsListController from '../chat/contacts-list/ContactsListController';
import ws from '../communication/socket';
import mainPage from '../main-page/mainPage';
import BaseElement from '../utils/BaseElement';
import ButtonElement from '../utils/ButtonElement';
import InputElement from '../utils/InputElement';
import generateId from '../utils/generateID';
import './login.scss';

export default class LoginForm {
    private loginForm: HTMLFormElement = document.createElement('form');

    private submitBtn = new ButtonElement(
        'Log in',
        ['button', 'login-btn'],
        true
    ).getButton();

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

    private usernameIsValid = false;
    private passwordIsValid = false;

    private serverErrorMessage = new BaseElement('span', [
        'error-msg',
    ]).getElement();

    constructor() {
        this.loginForm.classList.add('login-form');
        this.passWordInput.required = true;
        this.userNameInput.required = true;

        this.passWordInput.addEventListener('input', () => {
            this.passWordInput.classList.remove('valid', 'invalid');
            this.passwordValidationMsg.textContent = '';
            this.passWordInputValidation();
            this.canBeSubmited();
        });

        this.userNameInput.addEventListener('input', () => {
            this.userNameInput.classList.remove('valid', 'invalid');
            this.userNameValidationMsg.textContent = '';
            this.userNameInputValidation();
            this.canBeSubmited();
        });

        this.loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formIsValid = this.formValidation();
            if (formIsValid) {
                const userData = {
                    id: `USER_LOGIN:${generateId()}`,
                    type: 'USER_LOGIN',
                    payload: {
                        user: {
                            login: this.userNameInput.value,
                            password: this.passWordInput.value,
                        },
                    },
                };
                ws.send(JSON.stringify(userData));
                app.getState().setItem(
                    'userPassword',
                    userData.payload.user.password
                );
                app.getState().setItem('userName', userData.payload.user.login);
                // contactsListController.updateView();
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
        const formIsValid = this.passwordIsValid && this.usernameIsValid;
        if (formIsValid) {
            this.submitBtn.disabled = false;
        } else {
            this.submitBtn.disabled = true;
        }
        return formIsValid;
    }

    private canBeSubmited(): void {
        if (this.passwordIsValid && this.usernameIsValid) {
            this.submitBtn.disabled = false;
        } else {
            this.submitBtn.disabled = true;
        }
    }

    private userNameInputValidation(): void {
        this.userNameValidationMsg.textContent = '';
        const userName = this.userNameInput.value;
        if (/^[A-Z][a-zA-Z0-9]{2,19}$/.test(userName)) {
            this.userNameInput.classList.add('valid');
            this.userNameInput.classList.remove('invalid');
            this.usernameIsValid = true;
        } else {
            this.usernameIsValid = false;
            this.userNameInput.classList.add('invalid');
            this.userNameInput.classList.remove('valid');
            if (userName.length < 3) {
                this.userNameValidationMsg.textContent =
                    'The username must be no shorter tnan 3 characters';
            } else if (!/^[A-Z]/.test(userName)) {
                this.userNameValidationMsg.textContent =
                    'The username must start with a capital letter';
            } else if (/[^a-zA-Z0-9]/.test(userName)) {
                this.userNameValidationMsg.textContent =
                    'The username contains invalid characters (only letters and numbers are allowed))';
            }
        }
    }

    private passWordInputValidation(): void {
        this.passwordValidationMsg.textContent = '';
        const password = this.passWordInput.value;
        if (/^(?=.*[!|?])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
            this.passWordInput.classList.add('valid');
            this.passWordInput.classList.remove('invalid');
            this.passwordIsValid = true;
        } else {
            this.passwordIsValid = false;
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
    }

    public showServerErrorMessage(message: string) {
        this.serverErrorMessage.remove();
        this.passWordInput.classList.remove('valid');
        this.passwordIsValid = false;
        this.passWordInput.value = '';
        this.submitBtn.disabled = true;
        this.serverErrorMessage.textContent = message;
        this.loginForm.append(this.serverErrorMessage);
    }
}
