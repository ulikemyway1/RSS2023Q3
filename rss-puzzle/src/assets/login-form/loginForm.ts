import './loginForm.scss';
import InputElement from '../utils/InputElement';
import BaseElement from '../utils/BaseElement';

import createElement from '../utils/createElement';
import InputValidation from './validationRules';
import ParagraphElement from '../utils/ParagraphElement';
import ValidationMsg from './validationMsg';

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

    private firstNameLabel: HTMLElement | null = null;

    private lastNameLabel: HTMLElement | null = null;

    private firstNameValidationMessage: HTMLElement | null = null;

    private lastNameValidationMessage: HTMLElement | null = null;

    private errorIcon1: HTMLDivElement | null = null;

    private errorIcon2: HTMLDivElement | null = null;

    constructor() {
        this.haveToShow = true;
        this.form = new BaseElement('form', 'login-form', ['login-form']);
    }

    private initForm() {
        const formElement = this.form.getElement();
        this.firstNameLabel = createElement('label', undefined, [
            'login-form__label',
        ]);
        this.lastNameLabel = createElement('label', undefined, [
            'login-form__label',
        ]);
        this.firstNameInput = new InputElement(
            'text',
            undefined,
            'First Name',
            undefined,
            ['login-form__first-name-input', 'login-form__input']
        ).getElement();
        this.lastNameInput = new InputElement(
            'text',
            undefined,
            'Surname',
            undefined,
            ['login-form__first-name-input', 'login-form__input']
        ).getElement();
        this.firstNameInput.required = true;
        this.lastNameInput.required = true;

        this.firstNameValidationMessage = new ParagraphElement('', undefined, [
            'login-form__validation-message',
            'moved-out',
        ]).getElement();
        this.lastNameValidationMessage = new ParagraphElement('', undefined, [
            'login-form__validation-message',
            'moved-out',
        ]).getElement();

        this.firstNameInput.addEventListener(
            'input',
            this.checkInputs.bind(this)
        );
        this.lastNameInput.addEventListener(
            'input',
            this.checkInputs.bind(this)
        );

        this.errorIcon1 = document.createElement('div');
        this.errorIcon1.classList.add('error-icon', 'hidden');

        this.errorIcon2 = document.createElement('div');
        this.errorIcon2.classList.add('error-icon', 'hidden');

        this.firstNameLabel.append(
            this.firstNameInput,
            this.firstNameValidationMessage,
            this.errorIcon1
        );
        this.lastNameLabel.append(
            this.lastNameInput,
            this.lastNameValidationMessage,
            this.errorIcon2
        );

        this.submitBtn = new InputElement(
            'submit',
            'Login',
            undefined,
            undefined,
            ['login-form__submit-btn']
        ).getElement();

        this.submitBtn.disabled = true;

        formElement.addEventListener('submit', this.validate.bind(this));

        formElement.addEventListener('submit', (e) => e.preventDefault());
        formElement.append(
            this.firstNameLabel,
            this.lastNameLabel,
            this.submitBtn
        );
        return formElement;
    }

    private checkInputs(event: Event) {
        if (this.firstNameInput && this.lastNameInput && this.submitBtn) {
            if (
                this.firstNameInput.value.length > 0 &&
                this.lastNameInput.value.length > 0
            ) {
                this.submitBtn.disabled = false;
            } else {
                this.submitBtn.disabled = true;
            }
        }

        if (
            event.target === this.firstNameInput &&
            this.firstNameInput &&
            this.firstNameValidationMessage &&
            this.errorIcon1
        ) {
            this.firstNameValidationMessage.classList.add('moved-out');
            this.firstNameInput.classList.remove(
                'input-error',
                'input-accepted'
            );
            this.errorIcon1.classList.add('hidden');
        }

        if (
            event.target === this.lastNameInput &&
            this.lastNameInput &&
            this.lastNameValidationMessage &&
            this.errorIcon2
        ) {
            this.lastNameValidationMessage.classList.add('moved-out');
            this.lastNameInput.classList.remove(
                'input-error',
                'input-accepted'
            );
            this.errorIcon2.classList.add('hidden');
        }
    }

    private validate(e: Event) {
        e.preventDefault();
        if (this.firstNameInput && this.lastNameInput && this.submitBtn) {
            const firstName = this.firstNameInput.value;
            const lastName = this.lastNameInput.value;
            const firstNameIsValid =
                InputValidation.firstNameAll.test(firstName);
            const lastNameIsValid = InputValidation.lastNameAll.test(lastName);

            if (
                !firstNameIsValid &&
                this.firstNameValidationMessage &&
                this.errorIcon1
            ) {
                this.firstNameInput.classList.add('input-error');
                this.errorIcon1.classList.remove('hidden');

                if (firstName.length < 3) {
                    this.firstNameValidationMessage.textContent =
                        ValidationMsg.minFirstNameLength;
                }

                if (
                    !InputValidation.allowedChar.test(firstName) &&
                    firstName.length >= 3
                ) {
                    this.firstNameValidationMessage.textContent =
                        ValidationMsg.notAllowedCharacter;
                }

                if (
                    !InputValidation.fisrtUpper.test(firstName) &&
                    firstName.length >= 3 &&
                    InputValidation.allowedChar.test(firstName)
                ) {
                    this.firstNameValidationMessage.textContent =
                        ValidationMsg.noFirstUpperCase;
                }

                this.firstNameValidationMessage.classList.remove('moved-out');
            } else {
                this.firstNameInput.classList.remove('input-error');
                this.firstNameInput.classList.add('input-accepted');
            }

            if (
                !lastNameIsValid &&
                this.lastNameValidationMessage &&
                this.errorIcon2
            ) {
                this.lastNameInput.classList.add('input-error');
                this.errorIcon2.classList.remove('hidden');

                if (lastName.length < 4) {
                    this.lastNameValidationMessage.textContent =
                        ValidationMsg.minLastNameLength;
                }

                if (
                    !InputValidation.allowedChar.test(lastName) &&
                    lastName.length >= 4
                ) {
                    this.lastNameValidationMessage.textContent =
                        ValidationMsg.notAllowedCharacter;
                }

                if (
                    !InputValidation.fisrtUpper.test(lastName) &&
                    lastName.length >= 4 &&
                    InputValidation.allowedChar.test(lastName)
                ) {
                    this.lastNameValidationMessage.textContent =
                        ValidationMsg.noFirstUpperCase;
                }

                this.lastNameValidationMessage.classList.remove('moved-out');
            }

            if (firstNameIsValid) {
                this.firstNameInput.classList.remove('input-error');
                this.firstNameInput.classList.add('input-accepted');
            }

            if (lastNameIsValid) {
                this.lastNameInput.classList.remove('input-error');
                this.lastNameInput.classList.add('input-accepted');
            }
        }
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
