export default class BaseElement {
  private element: HTMLElement;

  constructor(tag: string, classNames?: string[], textContent?: string) {
    this.element = document.createElement(tag);

    if (classNames) {
      this.element.classList.add(...classNames);
    }

    if (textContent) {
      this.element.textContent = textContent;
    }
  }

  getElement(): HTMLElement {
    return this.element;
  }
}
