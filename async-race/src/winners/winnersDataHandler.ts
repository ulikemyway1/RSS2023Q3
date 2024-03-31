import { CarDescr } from "../types/garageTypes";
import { winnerInfo } from "./winnersTableItem";

export class WinnersDataHandler {
  private url: string = "http://127.0.0.1:3000/winners/";

  public async getWinner(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "GET",
    });
    const carDescr: CarDescr = await response.json();
    return carDescr;
  }

  public async getAllWinners(): Promise<winnerInfo[]> {
    const response = await fetch("http://127.0.0.1:3000/winners", {
      method: "GET",
    });
    const winnersData: winnerInfo[] = await response.json();
    return winnersData;
  }

  public async deleteWinner(id: number) {
    try {
      await fetch(`${this.url}${id}`, {
        method: "DELETE",
      }).then((respone) => {
        if (respone.status === 200) {
          console.warn(`Car id - ${id} has been deleted`);
        } else if (respone.status === 404) {
          throw new Error(`Car id - ${id} not found`);
        }
      });
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  }
}

const winnersDataHandler = new WinnersDataHandler();

export default winnersDataHandler;
