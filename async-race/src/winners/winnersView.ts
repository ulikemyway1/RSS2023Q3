import "./winnersView.scss";
import { IWinnersTableItem } from "../types/interface";
import BaseElement from "../utils/baseElement";
import WinnersItemWrapper from "./winnersItemWrapper";
import WinnersTableItem, { winnerInfo } from "./winnersTableItem";

export default class WinnersView {
  private view: HTMLElement = new BaseElement(
    "section",
    ["winners"],
    "Winners Table",
  ).getElement();

  private content: Set<IWinnersTableItem> = new Set();

  private itemsWrapper: WinnersItemWrapper | null = null;

  constructor() {
    this.loadRecords()
      .then(() => (this.itemsWrapper = new WinnersItemWrapper(this.content)))
      .then(() => {
        if (this.itemsWrapper) this.view.append(this.itemsWrapper.getView());
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
    winnersData.forEach((winerDescr) =>
      this.content.add(this.createTableItem(winerDescr)),
    );
  }

  private createTableItem(descr: winnerInfo): WinnersTableItem {
    const winnerTableitem = new WinnersTableItem(descr);
    return winnerTableitem;
  }
}
