import Car from "../garage/car";

export default class Engine {
  car: Car;
  carView: HTMLElement;
  constructor(car: Car) {
    this.car = car;
    this.carView = this.car.getCar();
  }
  async start() {
    await fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=started`,
      {
        method: "PATCH",
      },
    )
      .then((response) => response.json())
      .then((data) => this.applyDrivingStyles(data))
      .then(() => this.drive());
  }

  private applyDrivingStyles(data: { velocity: number; distance: number }) {
    const animationDuration = data.distance / data.velocity;
    this.carView.style.setProperty(
      "--velocity",
      String(animationDuration + "ms"),
    );
    this.carView.classList.add("driving");
  }

  private async drive() {
    await fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=drive`,
      {
        method: "PATCH",
      },
    ).then((response) => {
      if (response.status === 500) {
        this.carView.classList.add("stop-driving");
      }
    });
  }

  public stopDriving() {
    fetch(
      `http://127.0.0.1:3000/engine?id=${this.car.getID()}&status=stopped`,
      {
        method: "PATCH",
      },
    ).then(() => this.car.getCar().classList.remove("driving", "stop-driving"));
  }
}
