import BaseElement from "../utils/baseElement";

class MainPage {
  private view: HTMLElement = new BaseElement("section", [
    "main-page",
  ]).getElement();

  constructor() {
    const descr = new BaseElement(
      "p",
      ["main-page__descr"],
      `Piglet Peter and his friends really want to go abroad. But who among them will be faster? Let’s see!`,
    ).getElement();
    this.view.append(descr);
  }

  public getView(): HTMLElement {
    return this.view;
  }
}

const startPage = new MainPage();
export default startPage;
