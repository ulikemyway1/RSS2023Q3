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
        this.filter();
        return {
            userKnow: this.userKnow,
            userDoesntKnow: this.userDoesntKnow,
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
