import garage from "..";
import showWinner from "./winnerAnnouncement";
import "./race.scss";
type WinnerDescr = {
  id: number;
  wins: number;
  name: string;
  time: number;
};

export default class Race {
  private winnerIsKnown = false;
  public alert: HTMLElement | null = null;
  constructor() {}

  public saveWinner(winnerInfo: WinnerDescr) {
    if (!this.winnerIsKnown) {
      this.winnerIsKnown = true;
      this.tryMakeNewRecord(winnerInfo);
      garage.getRaceController().getResetBtn().disabled = false;
    }
  }

  private async tryMakeNewRecord(winnerInfo: WinnerDescr) {
    const existingRecordResponse = await fetch(
      `http://127.0.0.1:3000/winners/${winnerInfo.id}`,
    );
    const existingRecord: WinnerDescr = await existingRecordResponse.json();
    if (!existingRecord.id) {
      this.createNewRecord(winnerInfo);
    } else {
      this.updateData(winnerInfo, existingRecord);
    }
    this.alert = showWinner(
      winnerInfo.id,
      winnerInfo.name,
      Number((winnerInfo.time / 1000).toFixed(2)),
    );
    garage.getView().append(this.alert);
  }

  private async createNewRecord(winnerInfo: WinnerDescr) {
    try {
      await fetch("http://127.0.0.1:3000/winners/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(winnerInfo),
      }).then((response) => {
        if (response.status === 201) {
          console.log(`The winner is the car with the ID ${winnerInfo.id}`);
        } else if (response.status === 500) {
          throw new Error(
            `New record creation failed, duplicate id (${winnerInfo.id})`,
          );
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  private async updateData(
    winnerInfo: WinnerDescr,
    existingRecord: WinnerDescr,
  ) {
    try {
      await fetch(`http://127.0.0.1:3000/winners/${winnerInfo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wins: existingRecord.wins + 1,
          time:
            winnerInfo.time < existingRecord.time
              ? winnerInfo.time
              : existingRecord.time,
        }),
      }).then((response) => {
        if (response.status === 200) {
          console.log(`Update results for the car ID${winnerInfo.id}`);
        } else if (response.status === 404) {
          throw new Error(`ID${winnerInfo.id} not found`);
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
}
