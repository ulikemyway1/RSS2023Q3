import BaseElement from "../utils/baseElement";

export default function showWinner(id: number, name: string, time: number) {
  const alert = new BaseElement("div", ["alert"], "The winner is").getElement();
  const carName = new BaseElement(
    "span",
    ["alert__car-name"],
    name,
  ).getElement();
  const carId = new BaseElement(
    "span",
    ["alert__car-id"],
    `(car ID - ${id})`,
  ).getElement();
  const timeResult = new BaseElement(
    "span",
    ["alert__time-result"],
    `Time result: ${time} s`,
  ).getElement();
  alert.append(carName, carId, timeResult);
  return alert;
}
