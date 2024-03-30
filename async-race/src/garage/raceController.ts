import garage from "..";
import Race from "../race/race";
import ButtonElement from "../utils/InputElement";
import BaseElement from "../utils/baseElement";
import GarageItem from "./garageItem";

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

  public getElement(): HTMLElement {
    return this.element;
  }

  public getRace(): Race {
    return this.race;
  }

  public getResetBtn(): HTMLButtonElement {
    return this.stopRaceBtn;
  }

  public getStartBrn(): HTMLButtonElement {
    return this.startRaceBtn;
  }

  private startRace(): void {
    this.race = new Race();
    this.startRaceBtn.disabled = true;
    garage.getItemWrapper().nextPageBtn.disabled = true;
    garage.getItemWrapper().prevPageBtn.disabled = true;
    const allEngineStartedPromises: Promise<Response>[] = [];
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garaItem) => {
        garaItem.stopBtn.disabled = true;
        garaItem.driveBtn.disabled = true;
        garaItem.deleteBtn.disabled = true;
        allEngineStartedPromises.push(garaItem.engine.start("race"));
      });
    const garageItems = Array.from(
      garage.getItemWrapper().getCurrentPageContent(),
    );
    Promise.all(allEngineStartedPromises).then(() => {
      for (let i = 0; i < allEngineStartedPromises.length; i += 1) {
        allEngineStartedPromises[i]
          .then((response) => response.json())
          .then((data) => garageItems[i].engine.applyDrivingStyles(data))
          .then(() => (garageItems[i].engine.context.driveBtn.disabled = true))
          .then(() => garageItems[i].engine.drive("race"));
      }
    });
  }

  private stopRace(): void {
    this.stopRaceBtn.disabled = true;
    if (this.race.alert) this.race.alert.remove();
    const stopPromises: Promise<void>[] = [];
    garage
      .getItemWrapper()
      .getCurrentPageContent()
      .forEach((garagItem) =>
        stopPromises.push(garagItem.engine.stopDriving("race")),
      );
    Promise.all(stopPromises).then(() => {
      garage.getItemWrapper().nextPageBtn.disabled = false;
      garage.getItemWrapper().prevPageBtn.disabled = false;
      this.startRaceBtn.disabled = false;
      garage
        .getItemWrapper()
        .getCurrentPageContent()
        .forEach((item) => (item.driveBtn.disabled = false));
    });
  }
}
