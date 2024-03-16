import BaseElement from '../utils/BaseElement';
import LevelRoundList from './levelRoundList';
import './levelsBoard.scss';
import Levels from './levelsSrc';

export default class LevelsBoard {
    content: HTMLElement = new BaseElement('section', undefined, [
        'levels-board',
    ]).getElement();

    constructor() {
        this.appendContent();
    }

    private async appendContent() {
        const content: HTMLElement[] = [];
        const list = await new LevelRoundList(Levels['Level-1']).getList();
        if (list) content.push(list);
        this.content.append(...content);
    }

    public getContent() {
        return this.content;
    }
}
