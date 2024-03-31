import Car from "./garage/car";
import CarsCounter from "./garage/carsCounter";
import ColorSelector from "./garage/colorSelector";
import GarageView from "./garage/garageView";
import "./style.scss";
import WinnersView from "./winners/winnersView";
const garage = new GarageView();
const winners = new WinnersView();
export default garage;
document.body.append(garage.getView(), winners.getView());
