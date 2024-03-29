import garage from "..";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";

export default class RaceController {
  private element = new BaseElement("div", [
    "garage__race-control-wrapper",
  ]).getElement();

  private startRaceBtn = new ButtonElement(
    ["start-race", "button"],
    "Start Race",
  ).getButton();

  private stopRaceBtn = new ButtonElement(
    ["stop-race", "button"],
    "Stop Race",
  ).getButton();

  constructor() {
    this.startRaceBtn.addEventListener("click", () =>
      this.startRace.bind(this)(),
    );
    this.element.append(this.startRaceBtn, this.stopRaceBtn);
  }

  public getElement() {
    return this.element;
  }

  private startRace() {
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garaItem) => garaItem.engine.start());
  }
}
