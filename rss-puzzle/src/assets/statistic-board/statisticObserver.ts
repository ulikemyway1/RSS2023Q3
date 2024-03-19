import gameBoard, { IWord, IlevelData } from '../game-board/gameBoard';

export default class StatisticObserver {
    private userKnow: IWord[] = [];

    private userDoesntKnow: IWord[] = [];

    private imgInfo: IlevelData[] = [];

    public putUserKnow(obj: IWord) {
        this.userKnow.push(obj);
    }

    public popUeserKnow() {
        this.userKnow.pop();
    }

    public putUserDoesntKnow(obj: IWord) {
        this.userDoesntKnow.push(obj);
    }

    public reset() {
        this.userDoesntKnow = [];
        this.userKnow = [];
    }

    private putImgInfo() {
        if (gameBoard.levelData)
            this.imgInfo = [
                gameBoard.levelData.rounds[gameBoard.roundNumber].levelData,
            ];
    }

    public getStatistic() {
        this.filter();
        this.putImgInfo();
        return {
            userKnow: this.userKnow,
            userDoesntKnow: this.userDoesntKnow,
            imgInfo: this.imgInfo,
        };
    }

    private filter() {
        const userCompleted = this.userKnow.filter((item) => {
            if (this.userDoesntKnow.indexOf(item) !== -1) {
                return null;
            }
            return item;
        });
        this.userKnow = userCompleted;
    }
}
