import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";

export default class Paginator {
  private numberPerPage: number;

  private view: HTMLElement = new BaseElement("div", [
    "paginator",
  ]).getElement();

  private contentWrapper = new BaseElement("div", [
    "paginator__content-wrapper",
  ]).getElement();

  private controlsWrapper = new BaseElement("div", [
    "paginator__controls-wrapper",
  ]).getElement();

  private currentPage: number = 1;

  private totalPages: number = 1;

  private nextPageBtn = new ButtonElement(
    ["paginator__next-btn"],
    "Next Page",
  ).getButton();

  private prevPageBtn = new ButtonElement(
    ["paginator__next-btn"],
    "Prev Page",
  ).getButton();

  private content: HTMLElement[] = [];

  private nav: HTMLElement = new BaseElement("span", [
    "paginator__nav",
  ]).getElement();

  constructor(content: HTMLElement[], numberPerPage: number) {
    this.numberPerPage = numberPerPage;

    this.content = content;

    const totalElements = this.content.length;

    this.totalPages = Math.ceil(totalElements / numberPerPage);

    this.nav.textContent = `${this.currentPage} / ${this.totalPages}`;

    this.controlsWrapper.append(this.prevPageBtn, this.nextPageBtn);

    this.listContent(1);

    this.nextPageBtn.addEventListener("click", () =>
      this.goToNextPage.bind(this)(),
    );

    this.prevPageBtn.addEventListener("click", () =>
      this.goToPrevPage.bind(this)(),
    );
    this.prevPageBtn.disabled = true;

    this.view.append(this.contentWrapper, this.nav, this.controlsWrapper);
  }

  public setNumberPerPage(number: number) {
    this.numberPerPage = number;
  }

  public getView() {
    return this.view;
  }

  public updateAllContent(content: HTMLElement[]) {
    const totalElements = content.length;

    this.content = content;

    this.totalPages = Math.floor((totalElements - 1) / this.numberPerPage);
    console.log(totalElements);
    this.nav.textContent = `${this.currentPage} / ${this.totalPages}`;

    this.listContent(1);
  }

  public addContent(content: HTMLElement) {
    this.content.push(content);
  }

  private listContent(page: number) {
    const firstElementIndex = page * this.numberPerPage;
    const lastElementIndex = firstElementIndex + this.numberPerPage - 1;

    this.clearContentWrapper();

    if (this.content.length === 0) {
      const InfMessage = new BaseElement("span", [
        "paginator__inf-message",
        "Nothing",
      ]).getElement();
      this.contentWrapper.append(InfMessage);
    } else {
      for (let i = firstElementIndex; i <= lastElementIndex; i += 1) {
        if (this.content[i]) this.contentWrapper.append(this.content[i]);
      }
      this.updateNavInfo(page);
    }
  }

  private clearContentWrapper() {
    while (this.contentWrapper.lastElementChild)
      this.contentWrapper.lastElementChild.remove();
  }

  private updateNavInfo(page: number) {
    this.currentPage = page;
    this.nav.textContent = `${this.currentPage} / ${this.totalPages}`;
  }

  private goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.listContent(this.currentPage);
    }
    if (this.currentPage === this.totalPages) {
      this.nextPageBtn.disabled = true;
    } else {
      this.nextPageBtn.disabled = false;
    }
    if (this.currentPage !== 1) {
      this.prevPageBtn.disabled = false;
    }
  }

  private goToPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.listContent(this.currentPage);
    }
    if (this.currentPage === 1) {
      this.prevPageBtn.disabled = true;
    } else {
      this.prevPageBtn.disabled = false;
    }
    if (this.currentPage !== this.totalPages) {
      this.nextPageBtn.disabled = false;
    }
  }
}
