export default class InputElement {
    private input: HTMLInputElement = document.createElement('input');

    constructor(
        type: string,
        name: string,
        value: string,
        classList?: string[],
        placeholder?: string
    ) {
        this.input.type = type;
        this.input.value = value;
        this.input.name = name;
        this.input.id = name;
        if (classList) this.input.classList.add(...classList);
        if (placeholder) this.input.placeholder = placeholder;
    }

    public getInput() {
        return this.input;
    }
}
