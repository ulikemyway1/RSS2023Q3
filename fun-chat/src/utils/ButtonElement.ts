export default class ButtonElement {
    private button: HTMLButtonElement = document.createElement('button');

    constructor(textContent: string, classList: string[], isDisabled: boolean) {
        this.button.textContent = textContent;
        this.button.classList.add(...classList);
        this.button.disabled = isDisabled;
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }
}
