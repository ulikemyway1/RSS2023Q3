import { IWord } from '../game-board/gameBoard';

export default class StatisticObserver {
    private userKnow: IWord[] = [];

    private userDoesntKnow: IWord[] = [];

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

    getStatistic() {
        return {
            userKnow: this.userKnow,
            userDoesntKnow: this.userDoesntKnow,
        };
    }
}
