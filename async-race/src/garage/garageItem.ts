import garage from "..";
import Engine from "../car-animation/engine";
import { CarDescr } from "../types/garageTypes";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";
import Car from "./car";
import CarNameSelector from "./carNameSelector";
import ColorSelector from "./colorSelector";
import garageDataOwner from "./garageDataOwner";

export default class GarageItem {
  private item: HTMLElement = new BaseElement("article", [
    "garage__item",
  ]).getElement();

  private car: Car;

  private colorSelector: ColorSelector = new ColorSelector();

  private nameSelector: CarNameSelector = new CarNameSelector();

  private carName: string;

  private editModeActive = false;

  private currentCarName: string;

  private currentCarColor: string;

  public driveBtn = new ButtonElement(["drive", "button"], "Start").getButton();

  public stopBtn = new ButtonElement(
    ["stop-car", "button"],
    "Stop",
  ).getButton();

  public deleteBtn = new ButtonElement(
    ["button", "delete-btn"],
    "Delete",
  ).getButton();
  public editBtn = new ButtonElement(
    ["button", "edit-btn"],
    "Edit",
  ).getButton();

  public engine: Engine;

  constructor(carDescr: CarDescr) {
    this.car = new Car(carDescr.id, carDescr.color, carDescr.name, this);
    this.colorSelector.bindElement(this.car);
    this.colorSelector.setInitialColor(carDescr.color);
    this.colorSelector.getColorSelector().disabled = true;
    this.nameSelector.getNameSelector().disabled = true;
    this.carName = carDescr.name;
    this.nameSelector.bindCar(this.car);
    this.currentCarColor = carDescr.color;
    this.currentCarName = carDescr.name;
    const wrapper = new BaseElement("div", [
      "garage__item-wrapper",
    ]).getElement();
    wrapper.append(
      this.nameSelector.getNameSelector(),
      this.colorSelector.getColorSelector(),
    );

    const applyBtn = new BaseElement(
      "button",
      ["button", "apply-btn", "hidden"],
      "Apply",
    ).getElement();

    const btnWrapper = new BaseElement("div", [
      "garage__btn-wrapper",
    ]).getElement();

    this.deleteBtn.addEventListener("click", () => {
      if (this.car) this.deleteCar(this.car?.getID());
    });

    btnWrapper.append(this.editBtn, applyBtn);

    this.editBtn.addEventListener("click", () => {
      if (!this.editModeActive && this.car) {
        garage.getRaceController().getStartBrn().disabled = true;
        this.driveBtn.disabled = true;
        this.editBtn.textContent = "Cancel";
        applyBtn.classList.remove("hidden");
        this.editModeActive = true;
        this.colorSelector.getColorSelector().disabled = false;
        this.nameSelector.getNameSelector().disabled = false;
      } else {
        garage.getRaceController().getStartBrn().disabled = false;
        this.driveBtn.disabled = false;
        this.editBtn.textContent = "Edit";
        applyBtn.classList.add("hidden");
        this.editModeActive = false;
        this.colorSelector.getColorSelector().disabled = true;
        this.nameSelector.getNameSelector().disabled = true;
        if (this.car) {
          this.nameSelector.getNameSelector().value = this.currentCarName;
          this.colorSelector.setInitialColor(this.currentCarColor);
          this.car
            .getCar()
            .style.setProperty("--car-color", this.currentCarColor);
        }
      }
    });

    applyBtn.addEventListener("click", () => {
      if (this.car) {
        const carID = this.car.getID();
        console.log(carID);
        this.editCar(carID);
        this.editBtn.textContent = "Edit";
        applyBtn.classList.add("hidden");
        this.editModeActive = false;
        this.colorSelector.getColorSelector().disabled = true;
        this.nameSelector.getNameSelector().disabled = true;
        this.currentCarColor = this.nameSelector.getNameSelector().value;
        this.currentCarName = this.colorSelector.getColorSelector().value;
      }
    });

    const carControlBtnWrapper = new BaseElement("div", [
      "car-control-wrapper",
    ]).getElement();
    this.engine = new Engine(this.car);
    carControlBtnWrapper.append(this.driveBtn, this.stopBtn);
    this.driveBtn.addEventListener("click", () => {
      this.deleteBtn.disabled = true;
      this.editBtn.disabled = true;
      this.engine.start.bind(this.engine)("alone");
    });
    this.stopBtn.addEventListener("click", () =>
      this.engine.stopDriving.bind(this.engine)(),
    );

    this.item.append(
      this.car.getCar(),
      wrapper,
      btnWrapper,
      this.deleteBtn,
      carControlBtnWrapper,
    );
    this.stopBtn.disabled = true;
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
    });
  }

  private async deleteCar(id: number) {
    await garageDataOwner
      .deleteCar(id)
      .then(() => this.item.remove())
      .then(() => garage.getCarsCounter().updateCarsAmont());
    garage.getAllItems().delete(this);
    garage.getItemWrapper().updateAllContent();
  }
}
