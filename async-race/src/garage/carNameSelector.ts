import BaseElement from "../utils/baseElement";
import Car from "./car";

export default class CarNameSelector {
  private nameSelector: HTMLInputElement = document.createElement("input");

  private target: Car | null = null;

  constructor() {
    this.nameSelector.type = "text";
    this.nameSelector.classList.add("car-name-selector");
    this.nameSelector.addEventListener("change", () => {
      if (this.target) this.target.setName(this.nameSelector.value);
    });
  }

  public bindCar(car: Car) {
    this.target = car;
    this.nameSelector.value = car.getName();
  }

  public getNameSelector() {
    return this.nameSelector;
  }
}
