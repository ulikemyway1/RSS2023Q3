import Paginator from "../paginator/paginator";
import { IGarageListItem } from "../types/interface";

export default class GarageItemsWrapper extends Paginator<IGarageListItem> {
  constructor(allContent: Set<IGarageListItem>, numberPerPage: number) {
    super(allContent, numberPerPage);
  }
}
