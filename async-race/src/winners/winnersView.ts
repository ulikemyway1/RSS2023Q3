import "./winnersView.scss";
import { IWinnersTableItem } from "../types/interface";
import BaseElement from "../utils/baseElement";
import WinnersItemWrapper from "./winnersItemWrapper";
import WinnersTableItem, { winnerInfo } from "./winnersTableItem";
import ButtonElement from "../utils/InputElement";

export default class WinnersView {
  private view: HTMLElement = new BaseElement(
    "section",
    ["winners"],
    "Winners Table",
  ).getElement();

  private content: Set<IWinnersTableItem> = new Set();

  private itemsWrapper: WinnersItemWrapper | null = null;

  private header: HTMLElement = new BaseElement("div", [
    "winners__header",
  ]).getElement();

  constructor() {
    this.initHeader();
    this.loadRecords()
      .then(() => (this.itemsWrapper = new WinnersItemWrapper(this.content)))
      .then(() => {
        if (this.itemsWrapper)
          this.view.append(this.header, this.itemsWrapper.getView());
      });
  }

  public getView() {
    return this.view;
  }

  private async loadRecords() {
    const response = await fetch("http://127.0.0.1:3000/winners", {
      method: "GET",
    });
    const winnersData: winnerInfo[] = await response.json();
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
    const carTimeHeader = new ButtonElement(
      ["car-time-header", "button"],
      "Time",
    ).getButton();
    this.header.append(
      carIndexHeader,
      carImgHeader,
      carNameHeader,
      carWinsHeader,
      carTimeHeader,
    );
  }
}
