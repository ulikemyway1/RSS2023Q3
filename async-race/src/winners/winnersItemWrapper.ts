import Paginator from "../paginator/paginator";
import { IListItem, IWinnersTableItem } from "../types/interface";

export default class WinnersItemWrapper extends Paginator<IWinnersTableItem> {
  constructor(content: Set<IListItem>) {
    super(content, 10);
  }
}
