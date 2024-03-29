import garage from "..";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";

export default class RaceController {
  private element = new BaseElement("div", [
    "garage__race-control-wrapper",
  ]).getElement();

  private startRace = new ButtonElement(
    ["start-race", "button"],
    "Start Race",
  ).getButton();

  private stopRace = new ButtonElement(
    ["stop-race", "button"],
    "Stop Race",
  ).getButton();

  constructor() {
    this.startRace.addEventListener("click", () => this.Race.bind(this)());
    this.element.append(this.startRace, this.stopRace);
  }

  public getElement() {
    return this.element;
  }

  private Race() {
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garaItem) => garaItem.engine.start());
  }
}
