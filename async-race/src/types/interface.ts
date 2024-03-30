import Engine from "../car-animation/engine";

export interface IListItem {
    getItem(): HTMLElement;
  }

 export  interface IGarageListItem extends IListItem {
    stopBtn: HTMLButtonElement;
    driveBtn: HTMLButtonElement;
    deleteBtn: HTMLButtonElement;
    engine: Engine
  }

export  interface IWinnersTableItem extends IListItem {

}