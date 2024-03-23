import { CarDescr } from "../types/garageTypes";
import BaseElement from "../utils/baseElement";
import Car from "./car";
import CarNameSelector from "./carNameSelector";
import ColorSelector from "./colorSelector";

export default class GarageItem {
  private item: HTMLElement = new BaseElement("article", [
    "garage__item",
  ]).getElement();

  private car: Car | null = null;

  private colorSelector: ColorSelector = new ColorSelector();

  private nameSelector: CarNameSelector = new CarNameSelector();

  private carName: string;

  constructor(carDescr: CarDescr) {
    this.car = new Car(carDescr.id, carDescr.color, carDescr.name);
    this.colorSelector.bindElement(this.car);
    this.colorSelector.setInitialColor(carDescr.color);
    this.carName = carDescr.name;
    this.nameSelector.bindCar(this.car);
    const wrapper = new BaseElement("div", [
      "garage__item-wrapper",
    ]).getElement();
    wrapper.append(
      this.nameSelector.getNameSelector(),
      this.colorSelector.getColorSelector(),
    );
    const editBtn = new BaseElement(
      "button",
      ["button", "edit-btn"],
      "Edit",
    ).getElement();
    const applyBtn = new BaseElement(
      "button",
      ["button", "apply-btn", "hidden"],
      "Apply",
    ).getElement();

    const btnWrapper = new BaseElement("div", [
      "garage__btn-wrapper",
    ]).getElement();

    const deleteBtn = new BaseElement(
      "button",
      ["button", "delete-btn"],
      "Delete",
    ).getElement();

    btnWrapper.append(editBtn, applyBtn);
    applyBtn.addEventListener("click", () => {
      if (this.car) {
        const carID = this.car.getID();
        console.log(carID);
        this.editCar(carID);
      }
    });
    this.item.append(this.car.getCar(), wrapper, btnWrapper, deleteBtn);
  }

  public getGarageItem() {
    return this.item;
  }

  private editCar(id: number) {
    const newName = this.nameSelector.getNameSelector().value;
    const newColor = this.colorSelector.getColorSelector().value;
    fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        color: newColor,
      }),
    }).then((response) => console.log(response));
  }
}
