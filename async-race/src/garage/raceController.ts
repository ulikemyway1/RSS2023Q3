import garage from "..";
import Race from "../race/race";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";

export default class RaceController {
  private race = new Race();
  private element = new BaseElement("div", [
    "garage__race-control-wrapper",
  ]).getElement();

  private startRaceBtn = new ButtonElement(
    ["start-race", "button"],
    "Start Race",
  ).getButton();

  private stopRaceBtn = new ButtonElement(
    ["stop-race", "button"],
    "Reset",
  ).getButton();

  constructor() {
    this.startRaceBtn.addEventListener("click", () =>
      this.startRace.bind(this)(),
    );
    this.stopRaceBtn.disabled = true;

    this.stopRaceBtn.addEventListener("click", () =>
      this.stopRace.bind(this)(),
    );

    this.element.append(this.startRaceBtn, this.stopRaceBtn);
  }

  public getElement() {
    return this.element;
  }

  public getRace() {
    return this.race;
  }

  public getResetBtn() {
    return this.stopRaceBtn;
  }

  private startRace() {
    this.race = new Race();
    this.startRaceBtn.disabled = true;
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garaItem) => {
        garaItem.stopBtn.disabled = true;
        garaItem.driveBtn.disabled = true;
        garaItem.engine.start("race");
      });
  }

  private stopRace() {
    this.stopRaceBtn.disabled = true;
    const stopPromises: Promise<void>[] = [];
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garaItem) => stopPromises.push(garaItem.engine.stopDriving()));
    Promise.all(stopPromises).then(() => (this.startRaceBtn.disabled = false));
  }
}
