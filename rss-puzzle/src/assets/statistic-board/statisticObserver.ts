export default class StatisticObserver {
    private userKnow: string[] = [];

    private userDoesntKnow: string[] = [];

    public putUserKnow(str: string) {
        this.userKnow.push(str);
    }

    public putUserDoesntKnow(str: string) {
        this.userDoesntKnow.push(str);
    }

    public reset() {
        this.userDoesntKnow = [];
        this.userKnow = [];
    }
}
