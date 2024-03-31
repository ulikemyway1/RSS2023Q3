import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";
import startPage from "./mainPage";
import "./mainView.scss";

export default class MainVeiw {
  content: HTMLElement[] = [];

  header: HTMLElement = new BaseElement("header", ["header"]).getElement();

  nav: HTMLElement = new BaseElement("nav", ["nav"]).getElement();

  navUl: HTMLElement = new BaseElement("ul", ["header__nav-ul"]).getElement();

  btnControls: HTMLButtonElement[] = [];

  contentContainer: HTMLElement = new BaseElement("main", [
    "main",
  ]).getElement();

  mainPage: HTMLElement = startPage.getView();

  constructor() {
    this.nav.append(this.navUl);
    this.header.append(this.nav);
    this.content.push(this.mainPage);
    this.contentContainer.append(this.mainPage);

    const mainViewBtn = new ButtonElement(
      ["main-btn", "button"],
      "Main Page",
    ).getButton();
    mainViewBtn.disabled = true;
    mainViewBtn.addEventListener("click", (e) => {
      this.btnControls.forEach((btn) => (btn.disabled = false));
      if (e.target === mainViewBtn) {
        mainViewBtn.disabled = true;
      }
      this.content.forEach((element) => element.remove());
      this.contentContainer.append(this.mainPage);
    });
    this.btnControls.push(mainViewBtn);
    this.navUl.append(mainViewBtn);
  }

  public addContent(
    content: { name: string; element: HTMLElement; navCallbacl?: () => void }[],
  ): void {
    content.forEach((item) => {
      this.createNavItem(item.name, item.element, item.navCallbacl);
      this.content.push(item.element);
    });
  }

  public getHeader(): HTMLElement {
    return this.header;
  }

  public getMainConent(): HTMLElement {
    return this.contentContainer;
  }

  private createNavItem(
    textContent: string,
    target: HTMLElement,
    callback?: () => void,
  ): void {
    const btn = new ButtonElement(
      ["header__nav-ul__li", "button"],
      textContent,
    ).getButton();
    btn.addEventListener("click", (e) => {
      this.btnControls.forEach((btn) => (btn.disabled = false));
      if (e.target === btn) {
        btn.disabled = true;
      }
      this.content.forEach((element) => element.remove());
      this.contentContainer.append(target);
      if (callback) {
        callback();
      }
    });
    this.btnControls.push(btn);
    this.navUl.append(btn);
  }
}
