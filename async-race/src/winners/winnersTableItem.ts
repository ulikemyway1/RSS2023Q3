import Car from "../garage/car";
import { CarDescr } from "../types/garageTypes";
import { IWinnersTableItem } from "../types/interface";
import BaseElement from "../utils/baseElement";

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

  constructor(descr: winnerInfo) {
    this.carStat = descr;
    this.loadCar(descr.id).then(this.createWinnerItem.bind(this));
  }

  private async loadCar(id: number): Promise<void> {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "GET",
    });
    const carData: CarDescr = await response.json();
    this.car = new Car(carData.id, carData.color, carData.name, null);
  }

  private createWinnerItem() {
    if (this.car) {
      const carIcon = this.car.getCar();
      const carName = new BaseElement(
        "span",
        ["winner-name"],
        this.car.getName(),
      ).getElement();
      const bestTime = new BaseElement(
        "span",
        ["winner-time"],
        String(this.carStat.time),
      ).getElement();
      const wins = new BaseElement(
        "span",
        ["winner-wins"],
        String(this.carStat.wins),
      ).getElement();
      this.itemWrapper.append(carIcon, carName, wins, bestTime);
    }
  }

  public getItem(): HTMLElement {
    return this.itemWrapper;
  }
}
