import Paginator from "../paginator/paginator";
import BaseElement from "../utils/baseElement";
import Car from "./car";
import GarageItem from "./garageItem";

export default class GarageItemsWrapper extends Paginator {
  constructor(allContent: Set<GarageItem>, numberPerPage: number) {
    super(allContent, numberPerPage);
  }
}
