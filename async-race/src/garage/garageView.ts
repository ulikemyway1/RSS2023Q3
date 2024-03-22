import "./garageView.scss";
import BaseElement from "../utils/baseElement";

export default class GarageView {
  private view: HTMLElement = new BaseElement(
    "section",
    ["garage"],
    "Garage",
  ).getElement();

  public getView() {
    return this.view;
  }

  public appendElement(element: HTMLElement[]) {
    this.view.append(...element);
  }
}
