import garage from "..";
import { CarDescr } from "../types/garageTypes";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";
import HexColorGenerator from "../utils/hexColorGenerator";
import CarNameSelector from "./carNameSelector";
import { carNames, carModels } from "./carVariants";
import ColorSelector from "./colorSelector";
import GarageItem from "./garageItem";

export default class GarageCreationSection {
  private creationSection: HTMLElement = new BaseElement("div", [
    "garage__creation-section",
  ]).getElement();

  public carNameInput = new CarNameSelector().getNameSelector();

  public carColorInput = new ColorSelector().getColorSelector();

  public createBtn = new ButtonElement(
    ["button", "create-btn"],
    "Create a car",
  ).getButton();

  public createHandredBtn = new ButtonElement(
    ["button", "create-btn"],
    "Generate 100 cars",
  ).getButton();

  constructor() {
    this.createBtn.disabled = true;
    this.createBtn.addEventListener("click", () => this.createCar.bind(this)());

    const buttonWrapper = new BaseElement("div", [
      "garage__creation-section-wrapper",
    ]).getElement();

    this.createHandredBtn.addEventListener("click", () =>
      this.createHundredCars.bind(this)(),
    );

    buttonWrapper.append(this.createBtn, this.createHandredBtn);

    this.creationSection.append(
      this.carNameInput,
      this.carColorInput,
      buttonWrapper,
    );

    this.carNameInput.addEventListener("input", (e) => {
      if (
        e.target &&
        e.target instanceof HTMLInputElement &&
        e.target.value.trim().length > 2 &&
        e.target.value.trim().length < 19
      ) {
        this.createBtn.disabled = false;
      } else {
        this.createBtn.disabled = true;
      }
    });
  }

  private createCar(carDescr?: Omit<CarDescr, "id">): void {
    let bodyContent: Omit<CarDescr, "id">;
    if (carDescr) {
      bodyContent = carDescr;
    } else {
      bodyContent = {
        name: this.carNameInput.value,
        color: this.carColorInput.value,
      };
    }
    fetch(`http://127.0.0.1:3000/garage/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyContent),
    })
      .then((respone) => respone.json())
      .then((car: CarDescr) => {
        const garageItem = new GarageItem(car);
        garage.getItemWrapper().addContent(garageItem);
      })
      .then(() => garage.getCarsCounter().updateCarsAmont())
      .then(() => this.clearInput())
      .then(() => garage.getItemWrapper().updateAllContent());
  }

  private clearInput(): void {
    this.carNameInput.value = "";
    this.createBtn.disabled = true;
  }

  public getCreationSection(): HTMLElement {
    return this.creationSection;
  }

  public createHundredCars(): void {
    for (let i = 1; i <= 100; i += 1) {
      const nameIndex: number = Math.floor(Math.random() * carNames.length);
      const modelIndex: number = Math.floor(Math.random() * carModels.length);
      if (!carNames[nameIndex] || !carModels[modelIndex]) {
        i -= 1;
        continue;
      }
      const carDescr: Omit<CarDescr, "id"> = {
        name: `${carNames[nameIndex]} ${carModels[modelIndex]}`,
        color: new HexColorGenerator().getColor(),
      };
      this.createCar(carDescr);
    }
  }
}
