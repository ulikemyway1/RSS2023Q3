import { IwordCollectionData } from '../game-board/gameBoard';
import ListElement from '../utils/ListElement';
import Levels from './levelsSrc';

export default class LevelRoundList {
    dataSourceLink: Levels;

    constructor(src: Levels) {
        this.dataSourceLink = src;
    }

    private async fetchData() {
        const levelData: IwordCollectionData = await fetch(this.dataSourceLink)
            .then((respone) => respone.json())
            .then((data) => data);
        const list = new ListElement('ol', ['levels-board__level-list']);

        levelData.rounds.forEach((round) => {
            list.addListItem(
                round.levelData.name,
                ['levels-list__item'],
                round.levelData.cutSrc
            );
        });
        return list;
    }

    public async getList() {
        const list = await this.fetchData().then((list) => list.getList());
        return list;
    }
}
