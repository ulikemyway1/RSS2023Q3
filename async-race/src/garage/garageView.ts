import "./garageView.scss";
import BaseElement from "../utils/baseElement";
import garageDataOwner from "./garageDataOwner";
import { AllCardDescr } from "../types/garageTypes";
import Car from "./car";
import GarageItem from "./garageItem";
import GarageCreationSection from "./garageCreationSection";
import GarageItemsWrapper from "./garageItemsWrapper";
import CarsCounter from "./carsCounter";

export default class GarageView {
  private view: HTMLElement = new BaseElement(
    "section",
    ["garage"],
    "Garage",
  ).getElement();

  private creationSection = new GarageCreationSection();

  private carsCounter = new CarsCounter();

  private itemsWrapper = new GarageItemsWrapper([], 7);

  constructor() {
    this.appendElement([
      this.creationSection.getCreationSection(),
      this.carsCounter.getElement(),
      this.itemsWrapper.getView(),
    ]);
    this.carsCounter.updateCarsAmont();
    this.showAllCars();
  }

  public getView() {
    return this.view;
  }

  public appendElement(element: HTMLElement[]) {
    this.view.append(...element);
  }

  public async showAllCars() {
    const data = await garageDataOwner.getAllCars();
    const allItems: HTMLElement[] = [];
    data.forEach((carDescr) => {
      allItems.push(new GarageItem(carDescr).getGarageItem());
    });
    this.itemsWrapper.updateAllContent(allItems);
  }

  public getItemWrapper() {
    return this.itemsWrapper;
  }

  public getCarsCounter() {
    return this.carsCounter;
  }
}
