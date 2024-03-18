class GameProgressObserver {
    private completedRoundsDB: Set<string> = new Set();

    private completedLevelsDB: Set<string> = new Set();

    private lastCompletedRound: string[] = [];

    constructor() {
        this.loadDataFromLocalStorage();
    }

    public addCompletedRound(id: string) {
        const currentDBlength = this.completedRoundsDB.size;
        this.completedRoundsDB.add(id);
        const newDBlength = this.completedRoundsDB.size;
        if (newDBlength > currentDBlength)
            this.saveToLocalStorage(this.completedRoundsDB, 'completedRounds');
    }

    public addCompletedLevel(id: string) {
        const currentDBlength = this.completedLevelsDB.size;
        this.completedLevelsDB.add(id);
        const newDBlength = this.completedLevelsDB.size;
        if (newDBlength > currentDBlength)
            this.saveToLocalStorage(this.completedLevelsDB, 'completedLevels');
    }

    public isCompletedRound(id: string) {
        return this.completedRoundsDB.has(id);
    }

    public isCompletedLevel(id: string) {
        return this.completedLevelsDB.has(id);
    }

    private loadDataFromLocalStorage() {
        const savedRoundsData = localStorage.getItem('completedRounds__ULIKE');
        if (savedRoundsData) {
            const data: string[] = JSON.parse(savedRoundsData);
            data.forEach((id) => this.completedRoundsDB.add(id));
        }

        const savedLevelsData = localStorage.getItem('completedLevels__ULIKE');
        if (savedLevelsData) {
            const data: string[] = JSON.parse(savedLevelsData);
            data.forEach((id) => this.completedLevelsDB.add(id));
        }
    }

    public deleteAllData() {
        this.completedLevelsDB.clear();
        this.completedRoundsDB.clear();
    }

    public saveLastCompletedRound(round: string) {
        localStorage.setItem('lastCompleted__ULIKE', JSON.stringify([round]));
    }

    public getLastCompletedRound() {
        const lastRound = localStorage.getItem('lastCompleted__ULIKE');
        if (lastRound) {
            return JSON.parse(lastRound);
        }
        return null;
    }

    private saveToLocalStorage(instance: Set<string>, savedName: string) {
        const data = Array.from(instance);
        localStorage.setItem(`${savedName}__ULIKE`, JSON.stringify(data));
    }
}

const gameProgressObserver = new GameProgressObserver();

export default gameProgressObserver;
