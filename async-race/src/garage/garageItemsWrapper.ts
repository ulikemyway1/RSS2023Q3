import BaseElement from "../utils/baseElement";
import GarageItem from "./garageItem";

export default class GarageItemsWrapper {
  private element: HTMLElement = new BaseElement("section", [
    "garage__items-wrapper",
  ]).getElement();

  public appendItem(item: HTMLElement[]) {
    this.element.append(...item);
  }

  public getGarageItemWrapper() {
    return this.element;
  }
}
