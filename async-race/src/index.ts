import Car from "./garage/car";
import CarsCounter from "./garage/carsCounter";
import ColorSelector from "./garage/colorSelector";
import GarageView from "./garage/garageView";
import "./style.scss";
const garage = new GarageView();
export default garage;
document.body.append(garage.getView());
