import Paginator from "../paginator/paginator";
import { IWinnersTableItem } from "../types/interface";

export default class WinnersItemWrapper extends Paginator<IWinnersTableItem> {
  constructor(content: Set<IWinnersTableItem>) {
    super(content, 10);
  }
}
