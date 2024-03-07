import BaseElement from './BaseElement';

export default class InputElement extends BaseElement {
    private type: string;

    private palceholder: string | undefined;

    private value: string | undefined;

    element: HTMLInputElement;

    constructor(
        type: string,
        value?: string,
        placeholder?: string,
        id?: string,
        classNames?: string[],
        textContent?: string
    ) {
        super('input', id, classNames, textContent);
        this.type = type;
        this.value = value;
        this.palceholder = placeholder;
        this.element = this.createInput();
    }

    createInput() {
        this.element.setAttribute('type', this.type);
        if (this.palceholder)
            this.element.setAttribute('placeholder', this.palceholder);
        if (this.value) this.element.setAttribute('value', this.value);
        return this.element;
    }

    getElement() {
        return this.element;
    }
}
