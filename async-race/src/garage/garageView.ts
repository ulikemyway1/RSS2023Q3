import "./garageView.scss";
import BaseElement from "../utils/baseElement";
import garageDataOwner from "./garageDataOwner";
import GarageItem from "./garageItem";
import GarageCreationSection from "./garageCreationSection";
import GarageItemsWrapper from "./garageItemsWrapper";
import CarsCounter from "./carsCounter";
import RaceController from "./raceController";
import Car from "./car";

export default class GarageView {
  private view: HTMLElement = new BaseElement(
    "section",
    ["garage"],
    "Garage",
  ).getElement();

  private creationSection = new GarageCreationSection();

  private carsCounter = new CarsCounter();

  private itemsWrapper = new GarageItemsWrapper(new Set(), 7);

  private allItems: Set<GarageItem> = new Set();

  private headerWrapper = new BaseElement("div", [
    "garage__header-wrapper",
  ]).getElement();

  private raceController = new RaceController();

  constructor() {
    this.headerWrapper.append(
      this.raceController.getElement(),
      this.creationSection.getCreationSection(),
    );
    this.appendElement([
      this.headerWrapper,
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
    data.forEach((carDescr) => {
      this.allItems.add(new GarageItem(carDescr));
    });
    this.itemsWrapper.updateAllContent(this.allItems);
  }

  public getItemWrapper() {
    return this.itemsWrapper;
  }

  public getCarsCounter() {
    return this.carsCounter;
  }
  public getAllItems() {
    return this.allItems;
  }
}
