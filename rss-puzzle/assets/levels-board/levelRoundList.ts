import { IwordCollectionData } from '../game-board/gameBoard';
import ListElement from '../utils/ListElement';
import Levels from './levelsSrc';

export default class LevelRoundList {
    dataSourceLink: Levels;

    leveNumber: string;

    constructor(src: Levels, levelNumber: string) {
        this.dataSourceLink = src;
        this.leveNumber = levelNumber;
    }

    private async fetchData() {
        const levelData: IwordCollectionData = await fetch(this.dataSourceLink)
            .then((respone) => respone.json())
            .then((data) => data);

        const levelNumber = this.leveNumber.split('-')[1];
        const list = new ListElement(
            'ol',
            ['levels-board__level-list'],
            levelNumber
        );

        levelData.rounds.forEach((round, index) => {
            list.addListItem(
                round.levelData.name,
                ['levels-list__item'],
                round.levelData.cutSrc,
                index
            );
        });
        return list;
    }

    public async getList() {
        const list = await this.fetchData().then((list) => list.getList());
        return list;
    }
}
