import garage from "..";
import Engine from "../car-animation/engine";
import { updateCarData } from "../types/APItypes";
import { CarDescr } from "../types/garageTypes";
import { IGarageListItem, IListItem } from "../types/interface";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";
import BaseListItem from "../utils/baseListItem";
import winnersDataHandler from "../winners/winnersDataHandler";
import Car from "./car";
import CarNameSelector from "./carNameSelector";
import ColorSelector from "./colorSelector";
import garageDataOwner from "./garageDataOwner";

export default class GarageItem
  extends BaseListItem
  implements IGarageListItem
{
  private car: Car;

  private finishLine: HTMLElement = new BaseElement("div", [
    "finish-line",
  ]).getElement();

  private bg: HTMLElement = new BaseElement("div", ["bg"]).getElement();

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
    super("article", ["garage__item"]);
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
      const car = this.car;
      if (car) {
        const carId = car.getID();
        winnersDataHandler.deleteWinner(carId);
        this.deleteCar(carId);
      }
    });

    btnWrapper.append(this.editBtn, applyBtn);

    this.editBtn.addEventListener("click", () => {
      if (!this.editModeActive && this.car) {
        garage.itesmInEditMode.add(this);
        garage.getRaceController().getStartBrn().disabled = true;
        this.driveBtn.disabled = true;
        this.editBtn.textContent = "Cancel";
        applyBtn.classList.remove("hidden");
        this.editModeActive = true;
        this.colorSelector.getColorSelector().disabled = false;
        this.nameSelector.getNameSelector().disabled = false;
      } else {
        garage.itesmInEditMode.delete(this);
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
      if (garage.itesmInEditMode.size !== 0) {
        garage.getRaceController().getStartBrn().disabled = true;
      }
    });

    applyBtn.addEventListener("click", () => {
      if (this.car) {
        garage.itesmInEditMode.delete(this);
        this.driveBtn.disabled = false;
        garage.getRaceController().getStartBrn().disabled = false;
        const carID = this.car.getID();
        this.editCar(carID);
        this.editBtn.textContent = "Edit";
        applyBtn.classList.add("hidden");
        this.editModeActive = false;
        this.colorSelector.getColorSelector().disabled = true;
        this.nameSelector.getNameSelector().disabled = true;
        this.currentCarName = this.nameSelector.getNameSelector().value;
        this.currentCarColor = this.colorSelector.getColorSelector().value;
        if (garage.itesmInEditMode.size !== 0) {
          garage.getRaceController().getStartBrn().disabled = true;
        }
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
      this.engine.stopDriving.bind(this.engine)("alone"),
    );

    this.item.append(
      this.finishLine,
      this.bg,
      this.car.getCar(),
      wrapper,
      btnWrapper,
      this.deleteBtn,
      carControlBtnWrapper,
    );
    this.stopBtn.disabled = true;
  }

  public getItem() {
    return this.item;
  }

  private editCar(id: number): void {
    const newName: string = this.nameSelector.getNameSelector().value;
    const newColor: string = this.colorSelector.getColorSelector().value;

    const newCarParam: updateCarData = {
      name: newName,
      color: newColor,
    };

    fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarParam),
    });
  }

  private async deleteCar(id: number): Promise<void> {
    await garageDataOwner
      .deleteCar(id)
      .then(() => this.item.remove())
      .then(() => garage.getCarsCounter().updateCarsAmont());
    garage.getAllItems().delete(this);
    garage.getItemWrapper().updateAllContent();
    garage.getRaceController().getStartBrn().disabled = false;
    if (this.editModeActive) {
      this.editModeActive = false;
    }
  }
}
