export default class ButtonElement {
  private button: HTMLButtonElement = document.createElement("button");

  constructor(classNames: string[], textContent?: string) {
    this.button.classList.add(...classNames);
    if (textContent) this.button.textContent = textContent;
  }

  public getButton(): HTMLButtonElement {
    return this.button;
  }
}
