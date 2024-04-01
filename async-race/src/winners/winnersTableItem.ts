import Car from "../garage/car";
import { CarDescr } from "../types/garageTypes";
import { IWinnersTableItem } from "../types/interface";
import BaseElement from "../utils/baseElement";
import winnersDataHandler, { WinnersDataHandler } from "./winnersDataHandler";

export type winnerInfo = {
  id: number;
  wins: number;
  time: number;
};

export default class WinnersTableItem implements IWinnersTableItem {
  private itemWrapper: HTMLElement = new BaseElement("div", [
    "winner-table__item-wrapper",
  ]).getElement();

  private car: Car | null = null;

  private carStat: winnerInfo;

  private index: number;

  private dataHandler: WinnersDataHandler = winnersDataHandler;

  constructor(descr: winnerInfo, index: number) {
    this.carStat = descr;
    this.index = index;
    this.loadCar(descr.id).then(this.createWinnerItem.bind(this));
  }

  private async loadCar(id: number): Promise<void> {
    const carData = await this.dataHandler.getWinner(id);
    this.car = new Car(carData.id, carData.color, carData.name, null);
  }

  private createWinnerItem() {
    if (this.car) {
      const carIndex = new BaseElement(
        "span",
        ["winner-index"],
        String(this.index),
      ).getElement();
      const carIcon = this.car.getCar();
      const carName = new BaseElement(
        "span",
        ["winner-name"],
        this.car.getName(),
      ).getElement();
      const bestTime = new BaseElement(
        "span",
        ["winner-time"],
        String((this.carStat.time / 1000).toFixed(2)),
      ).getElement();
      const wins = new BaseElement(
        "span",
        ["winner-wins"],
        String(this.carStat.wins),
      ).getElement();
      this.itemWrapper.append(carIndex, carIcon, carName, wins, bestTime);
    }
  }

  public getItem(): HTMLElement {
    return this.itemWrapper;
  }
}
