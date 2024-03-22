import Car from "./car";

export default class ColorSelector {
  colorSelector = document.createElement("input");
  target: Car | null = null;
  constructor() {
    this.colorSelector.type = "color";
    this.colorSelector.value = "#064e15";
    this.colorSelector.classList.add("color-selector");
    this.colorSelector.addEventListener("change", () => {
      if (this.target) {
        this.target
          .getCar()
          .style.setProperty("--car-color", this.colorSelector.value);
      }
    });
  }

  public bindElement(element: Car) {
    this.target = element;
  }

  public getColorSelector() {
    return this.colorSelector;
  }
}
