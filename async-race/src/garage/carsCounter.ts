import BaseElement from "../utils/baseElement";

export default class CarsCounter {
  private element: HTMLElement = new BaseElement(
    "p",
    ["garage__cars-counter"],
    "Total cars: ",
  ).getElement();

  private count: HTMLElement = new BaseElement(
    "span",
    ["garage__card-counter-number"],
    "0",
  ).getElement();

  constructor() {
    this.element.append(this.count);
  }

  public getElement() {
    return this.element;
  }

  public updateCarsAmont() {
    fetch("http://127.0.0.1:3000/garage")
      .then((response) => response.json())
      .then((data) => (this.count.textContent = data.length));
  }
}
