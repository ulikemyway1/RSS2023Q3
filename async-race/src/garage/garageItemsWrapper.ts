import Paginator from "../paginator/paginator";
import BaseElement from "../utils/baseElement";
import GarageItem from "./garageItem";

export default class GarageItemsWrapper extends Paginator {
  constructor(allContent: HTMLElement[], numberPerPage: number) {
    super(allContent, numberPerPage);
  }
}
