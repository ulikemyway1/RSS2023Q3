export default class HexColorGenerator {
  private red: number;
  private blue: number;
  private green: number;

  constructor() {
    this.red = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
  }

  getColor() {
    return `#${this.red.toString(16).padStart(2, "0")}${this.green.toString(16).padStart(2, "0")}${this.blue.toString(16).padStart(2, "0")}`;
  }
}
