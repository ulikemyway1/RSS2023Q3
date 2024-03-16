export default class BaseElement {
    private tag;

    private id;

    private classNames;

    private textContent;

    element: HTMLElement;

    constructor(
        tag: string,
        id?: string,
        classNames?: (string | undefined)[],
        textContent?: string
    ) {
        this.tag = tag;
        this.id = id;
        this.classNames = classNames;
        this.textContent = textContent;
        this.element = this.create();
    }

    create() {
        const element = document.createElement(this.tag);
        if (this.id) element.id = this.id;
        if (this.classNames && this.classNames.length > 0)
            this.classNames.forEach((item) => {
                if (item) element.classList.add(item);
            });

        if (this.textContent) element.textContent = this.textContent;
        return element;
    }

    getElement() {
        return this.element;
    }
}
