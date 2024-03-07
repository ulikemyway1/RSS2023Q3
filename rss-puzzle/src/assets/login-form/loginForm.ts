import './loginForm.scss';
import InputElement from '../utils/InputElement';
import BaseElement from '../utils/BaseElement';

import createElement from '../utils/createElement';

interface ILoginForm {
    render(): void;
    set setStatus(userIsLogged: boolean);
}

class LoginForm implements ILoginForm {
    private haveToShow;

    private form;

    private firstNameInput: HTMLInputElement | null = null;

    private lastNameInput: HTMLInputElement | null = null;

    private submitBtn: HTMLInputElement | null = null;

    constructor() {
        this.haveToShow = true;
        this.form = new BaseElement('form', 'login-form', ['login-form']);
    }

    initForm() {
        const formElement = this.form.getElement();
        const firstNameLabel = createElement('label', undefined, [
            'login-form__label',
        ]);
        const lastNameLabel = createElement('label', undefined, [
            'login-form__label',
        ]);
        this.firstNameInput = new InputElement(
            'input',
            undefined,
            'First Name',
            undefined,
            ['login-form__first-name-input', 'login-form__input']
        ).getElement();
        this.lastNameInput = new InputElement(
            'input',
            undefined,
            'Surname',
            undefined,
            ['login-form__first-name-input', 'login-form__input']
        ).getElement();
        this.firstNameInput.required = true;
        this.lastNameInput.required = true;
        firstNameLabel.append(this.firstNameInput);
        lastNameLabel.append(this.lastNameInput);
        this.submitBtn = new InputElement(
            'submit',
            'Login',
            undefined,
            undefined,
            ['login-form__submit-btn']
        ).getElement();

        this.submitBtn.disabled = true;

        formElement.addEventListener('submit', (e) => e.preventDefault());
        formElement.append(firstNameLabel, lastNameLabel, this.submitBtn);
        return formElement;
    }

    render() {
        if (this.haveToShow) document.body.append(this.initForm());
    }

    set setStatus(userIsLogged: boolean) {
        if (userIsLogged) this.haveToShow = true;
    }
}

const loginForm = new LoginForm();

export default loginForm;
