import garage, { mainVeiw } from "..";
import Car from "../garage/car";
import GarageItem from "../garage/garageItem";

type driveMode = "alone" | "race";

export default class Engine {
  car: Car;
  carView: HTMLElement;
  context: GarageItem | null;
  private workTime: number = 0;
  constructor(car: Car) {
    this.car = car;
    this.context = this.car.context;
    this.carView = this.car.getCar();
  }
  async start(mode: driveMode): Promise<Response> {
    if (this.context) this.context.editBtn.disabled = true;
    garage.getRaceController().getStartBrn().disabled = true;
    mainVeiw.btnControls.forEach((btn) => (btn.disabled = true));
    const response = fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=started`,
      {
        method: "PATCH",
      },
    );
    if (mode === "alone" && this.context) {
      response
        .then((response) => response.json())
        .then((data) => this.applyDrivingStyles(data))
        .then(() => {
          if (this.context) this.context.driveBtn.disabled = true;
        })
        .then(() => this.drive(mode));
    }
    return response;
  }

  public applyDrivingStyles(data: { velocity: number; distance: number }) {
    const animationDuration = data.distance / data.velocity;
    this.workTime = animationDuration;
    this.carView.style.setProperty(
      "--velocity",
      String(animationDuration + "ms"),
    );
    this.carView.classList.add("driving");
  }

  public async drive(mode: driveMode): Promise<void> {
    if (mode === "alone" && this.context) this.context.stopBtn.disabled = false;
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=drive`,
        {
          method: "PATCH",
        },
      ).then((response) => {
        if (response.status === 500) {
          this.carView.classList.add("stop-driving");
          throw new Error(
            `Car (ID ${this.car.getID()} - ${this.car.getName()}) has been stopped suddenly. It's engine was broken down.`,
          );
        } else if (response.status === 429) {
          throw new Error(
            `Car (ID ${this.car.getID()} - ${this.car.getName()}) is already driving`,
          );
        } else if (response.status === 404) {
          throw new Error(
            `Car (ID ${this.car.getID()} - not found or its engine is not started`,
          );
        } else if (response.status === 400) {
          throw new Error(
            `Car (ID ${this.car.getID()} - Ooops. Wrong paramets: "status" should be "started", "stopped" or "drive"`,
          );
        } else if (mode === "race") {
          response.json().then((result: { success: boolean }) => {
            if (result.success) {
              garage
                .getRaceController()
                .getRace()
                .saveWinner({
                  id: this.car.getID(),
                  name: this.car.getName(),
                  wins: 1,
                  time: Number(Math.round(this.workTime)),
                });
            }
          });
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        console.warn(e.message);
      } else {
        console.warn(e);
      }
    }
  }

  public async stopDriving(mode: driveMode): Promise<void> {
    await fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=stopped`,
      {
        method: "PATCH",
      },
    )
      .then(() => this.car.getCar().classList.remove("driving", "stop-driving"))
      .then(() => {
        if (this.context) {
          this.context.stopBtn.disabled = true;
          this.context.deleteBtn.disabled = false;
          this.context.editBtn.disabled = false;
          mainVeiw.btnControls.forEach((btn) => (btn.disabled = false));
          garage.getRaceController().getStartBrn().disabled = true;
          if (mode === "alone") {
            garage.getRaceController().getStartBrn().disabled = false;
            this.context.driveBtn.disabled = false;
          }
        }
      });
  }
}
