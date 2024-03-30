import garage from "..";
import Car from "../garage/car";
import GarageItem from "../garage/garageItem";

type driveMode = "alone" | "race";

export default class Engine {
  car: Car;
  carView: HTMLElement;
  context: GarageItem;
  private workTime: number = 0;
  constructor(car: Car) {
    this.car = car;
    this.context = this.car.context;
    this.carView = this.car.getCar();
  }

  async start(mode: driveMode) {
    this.context.editBtn.disabled = true;
    const response = fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=started`,
      {
        method: "PATCH",
      },
    );
    if (mode === "alone") {
      response
        .then((response) => response.json())
        .then((data) => this.applyDrivingStyles(data))
        .then(() => (this.context.driveBtn.disabled = true))
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

  public async drive(mode: driveMode) {
    if (mode === "alone") this.context.stopBtn.disabled = false;
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

  public async stopDriving() {
    await fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=stopped`,
      {
        method: "PATCH",
      },
    )
      .then(() => this.car.getCar().classList.remove("driving", "stop-driving"))
      .then(() => {
        this.context.driveBtn.disabled = false;
        this.context.stopBtn.disabled = true;
        this.context.deleteBtn.disabled = false;
        this.context.editBtn.disabled = false;
      });
  }
}
