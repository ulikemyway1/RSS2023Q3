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

  private carNameInput = new CarNameSelector().getNameSelector();

  private carColorInput = new ColorSelector().getColorSelector();
  private createBtn = new ButtonElement(
    ["button", "create-btn"],
    "Create a car",
  ).getButton();

  constructor() {
    this.createBtn.disabled = true;
    this.createBtn.addEventListener("click", () => this.createCar.bind(this)());

    const createHandredBtn = new BaseElement(
      "button",
      ["button", "create-btn"],
      "Generate 100 cars",
    ).getElement();
    const buttonWrapper = new BaseElement("div", [
      "garage__creation-section-wrapper",
    ]).getElement();

    createHandredBtn.addEventListener("click", () =>
      this.createHundredCars.bind(this)(),
    );

    buttonWrapper.append(this.createBtn, createHandredBtn);

    this.creationSection.append(
      this.carNameInput,
      this.carColorInput,
      buttonWrapper,
    );

    this.carNameInput.addEventListener("input", (e) => {
      if (
        e.target &&
        e.target instanceof HTMLInputElement &&
        e.target.value.length > 0
      ) {
        this.createBtn.disabled = false;
      } else {
        this.createBtn.disabled = true;
      }
    });
  }

  private createCar(carDescr?: Omit<CarDescr, "id">) {
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
        const garageItem = new GarageItem(car).getGarageItem();
        garage.getItemWrapper().addContent(garageItem);
      })
      .then(() => garage.getCarsCounter().updateCarsAmont())
      .then(() => this.clearInput());
  }

  private clearInput() {
    this.carNameInput.value = "";
    this.createBtn.disabled = true;
  }

  public getCreationSection() {
    return this.creationSection;
  }

  public createHundredCars() {
    for (let i = 1; i <= 100; i += 1) {
      const nameIndex = Math.floor(Math.random() * carNames.length);
      const modelIndex = Math.floor(Math.random() * carModels.length);
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
