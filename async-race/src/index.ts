import Car from "./garage/car";
import CarsCounter from "./garage/carsCounter";
import ColorSelector from "./garage/colorSelector";
import GarageView from "./garage/garageView";
import MainVeiw from "./main/mainView";
import "./style.scss";
import WinnersView from "./winners/winnersView";
const garage = new GarageView();
const winners = new WinnersView();
const mainVeiw = new MainVeiw();

mainVeiw.addContent([
  {
    name: "Open Garage",
    element: garage.getView(),
  },
  {
    name: "Open Winners Table",
    element: winners.getView(),
    navCallbacl: winners.updateContent.bind(winners),
  },
]);

document.body.append(mainVeiw.getHeader(), mainVeiw.getMainConent());
export default garage;
