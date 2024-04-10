export default class BaseElement {
    private element: HTMLElement;
    constructor(tag: string, classList?: string[], textContent?: string) {
        this.element = document.createElement(tag);
        if (classList) {
            this.element.classList.add(...classList);
        }
        if (textContent) {
            this.element.textContent = textContent;
        }
    }

    public getElement(): HTMLElement {
        return this.element;
    }

    public remove(): void {
        this.element.remove();
    }
}
