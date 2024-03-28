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

  private currentPage: number = 0;

  private totalPages: number = 0;

  private nextPageBtn = new ButtonElement(
    ["paginator__next-btn"],
    "Next Page",
  ).getButton();

  private prevPageBtn = new ButtonElement(
    ["paginator__next-btn"],
    "Prev Page",
  ).getButton();

  private content: Set<HTMLElement> = new Set();

  private nav: HTMLElement = new BaseElement("span", [
    "paginator__nav",
  ]).getElement();

  constructor(content: Set<HTMLElement>, numberPerPage: number) {
    this.numberPerPage = numberPerPage;

    this.content = content;

    const totalElements = this.content.size;

    this.totalPages = Math.ceil(totalElements / numberPerPage);

    this.nav.textContent = `${this.currentPage + 1} / ${this.totalPages}`;

    this.controlsWrapper.append(this.prevPageBtn, this.nextPageBtn);

    this.listContent(1);

    this.nextPageBtn.addEventListener("click", () =>
      this.goToNextPage.bind(this)(),
    );

    this.prevPageBtn.addEventListener("click", () =>
      this.goToPrevPage.bind(this)(),
    );
    this.prevPageBtn.disabled = true;
    this.nextPageBtn.disabled = true;

    this.view.append(this.contentWrapper, this.nav, this.controlsWrapper);
    this.updateControlsStatus();
  }

  public setNumberPerPage(number: number) {
    this.numberPerPage = number;
  }

  public getView() {
    return this.view;
  }

  public updateAllContent(content?: Set<HTMLElement>) {
    let totalElements: number;
    if (content && content.size > 0) {
      totalElements = content.size;
      this.content = content;
    } else {
      totalElements = this.content.size;
    }

    this.totalPages = Math.ceil(totalElements / this.numberPerPage);
    this.nav.textContent = `${this.currentPage} / ${this.totalPages}`;

    this.listContent(0);
    this.updateControlsStatus();
  }

  public addContent(content: HTMLElement) {
    this.content.add(content);
  }

  private listContent(page: number) {
    const firstElementIndex = page * this.numberPerPage;
    const lastElementIndex = firstElementIndex + this.numberPerPage - 1;

    this.clearContentWrapper();

    if (this.content.size === 0) {
      const InfMessage = new BaseElement("span", [
        "paginator__inf-message",
        "Nothing",
      ]).getElement();
      this.contentWrapper.append(InfMessage);
    } else {
      const arr = Array.from(this.content);
      for (let i = firstElementIndex; i <= lastElementIndex; i += 1) {
        if (arr[i]) this.contentWrapper.append(arr[i]);
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
    this.nav.textContent = `${this.currentPage + 1} / ${this.totalPages}`;
  }

  private goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage += 1;
      this.listContent(this.currentPage);
    }
    this.updateControlsStatus();
  }

  private goToPrevPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.listContent(this.currentPage);
    }
    this.updateControlsStatus();
  }

  private updateControlsStatus() {
    if (this.currentPage === this.totalPages - 1) {
      this.nextPageBtn.disabled = true;
    } else {
      this.nextPageBtn.disabled = false;
    }
    if (this.currentPage !== 0) {
      this.prevPageBtn.disabled = false;
    }
    if (this.currentPage === 0) {
      this.prevPageBtn.disabled = true;
    } else {
      this.prevPageBtn.disabled = false;
    }
    if (this.currentPage !== this.totalPages - 1) {
      this.nextPageBtn.disabled = false;
    }
  }
}
