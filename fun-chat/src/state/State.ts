export default class State {
    private stateDB;

    constructor() {
        const savedStateDB = sessionStorage.getItem('savedStateDB');
        if (savedStateDB) {
            this.stateDB = JSON.parse(savedStateDB);
        } else {
            this.stateDB = {};
        }
    }

    public setItem(key: string, value: string | undefined) {
        this.stateDB[key] = value;
        this.saveStateDBtoSessionStorage();
    }

    public getItem(key: string) {
        return this.stateDB[key];
    }

    public deleteItem(key: string) {
        sessionStorage.removeItem(key);
    }

    private saveStateDBtoSessionStorage() {
        sessionStorage.setItem('savedStateDB', JSON.stringify(this.stateDB));
    }
}
