export default class State {
    private stateDB = new Map();

    public setItem(key: string, value: string) {
        this.stateDB.set(key, value);
    }

    public getItem(key: string) {
        try {
            if (this.stateDB.has(key)) {
                return this.stateDB.get(key);
            }
            throw new Error(`${key} not found in State`);
        } catch (e) {
            if (e instanceof Error) console.warn(e.message);
        }
    }
}
