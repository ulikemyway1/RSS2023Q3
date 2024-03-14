export default class ImageElement {
    element: HTMLImageElement;

    constructor(src: string, classNames: string[], alt: string) {
        this.element = document.createElement('img');
        this.element.src = src;
        this.element.classList.add(...classNames);
        this.element.alt = alt;
    }

    getElement() {
        return this.element;
    }
}
