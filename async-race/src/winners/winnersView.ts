import "./winnersView.scss";
import { IWinnersTableItem } from "../types/interface";
import BaseElement from "../utils/baseElement";
import WinnersItemWrapper from "./winnersItemWrapper";
import WinnersTableItem, { winnerInfo } from "./winnersTableItem";
import ButtonElement from "../utils/InputElement";
import winnersDataHandler, { WinnersDataHandler } from "./winnersDataHandler";

export default class WinnersView {
  private view: HTMLElement = new BaseElement("section", [
    "winners",
  ]).getElement();

  private winnersTitle: HTMLElement = new BaseElement(
    "h2",
    ["winners__title"],
    "Winners Table",
  ).getElement();

  private recordsAmount: HTMLElement = new BaseElement("span", [
    "winners__total",
  ]).getElement();

  private content: Set<IWinnersTableItem> = new Set();

  private itemsWrapper: WinnersItemWrapper | null = null;

  private header: HTMLElement = new BaseElement("div", [
    "winners__header",
  ]).getElement();

  private dataHandler: WinnersDataHandler = winnersDataHandler;

  constructor() {
    this.initHeader();
    this.loadRecords()
      .then(() => (this.itemsWrapper = new WinnersItemWrapper(this.content)))
      .then(() => {
        if (this.itemsWrapper)
          this.view.append(
            this.winnersTitle,
            this.recordsAmount,
            this.header,
            this.itemsWrapper.getView(),
          );
      });
  }

  public getView() {
    return this.view;
  }

  public async updateContent(): Promise<void> {
    this.content.clear();
    await this.loadRecords();
    this.itemsWrapper?.updateAllContent(this.content);
  }

  private async loadRecords() {
    const winnersData: winnerInfo[] = await this.dataHandler.getAllWinners();
    this.recordsAmount.textContent = `Total records: ${winnersData.length}`;

    winnersData.forEach((winerDescr, index) =>
      this.content.add(this.createTableItem(winerDescr, index)),
    );
  }

  private createTableItem(descr: winnerInfo, index: number): WinnersTableItem {
    const winnerTableitem = new WinnersTableItem(descr, index + 1);
    return winnerTableitem;
  }

  private initHeader() {
    const carIndexHeader = new BaseElement(
      "span",
      ["car-index-header"],
      "№",
    ).getElement();
    const carImgHeader = new BaseElement(
      "span",
      ["car-img-header"],
      "Car",
    ).getElement();
    const carNameHeader = new BaseElement(
      "span",
      ["car-name-header"],
      "Name",
    ).getElement();

    const carWinsHeader = new ButtonElement(
      ["car-wins-header", "button"],
      "Wins",
    ).getButton();

    carWinsHeader.addEventListener("click", () => {
      this.dataHandler.setSortType("wins");

      const currentSortOrder = this.dataHandler.getSortOrder();
      if (currentSortOrder === "ASC") {
        this.dataHandler.setSortOrder("DESC");
      } else {
        this.dataHandler.setSortOrder("ASC");
      }
      this.updateContent();
    });

    const carTimeHeader = new ButtonElement(
      ["car-time-header", "button"],
      "Time, s",
    ).getButton();

    carTimeHeader.addEventListener("click", () => {
      this.dataHandler.setSortType("time");

      const currentSortOrder = this.dataHandler.getSortOrder();
      if (currentSortOrder === "ASC") {
        this.dataHandler.setSortOrder("DESC");
      } else {
        this.dataHandler.setSortOrder("ASC");
      }
      this.updateContent();
    });

    this.header.append(
      carIndexHeader,
      carImgHeader,
      carNameHeader,
      carWinsHeader,
      carTimeHeader,
    );
  }
}
