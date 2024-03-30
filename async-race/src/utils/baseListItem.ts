import { IListItem } from "../types/interface";
import BaseElement from "./baseElement";

export default class BaseListItem implements IListItem {
  protected item: HTMLElement;

  constructor(tag: string, classNames?: string[], textContent?: string) {
    this.item = new BaseElement(tag, classNames, textContent).getElement();
  }

  public getItem() {
    return this.item;
  }
}
