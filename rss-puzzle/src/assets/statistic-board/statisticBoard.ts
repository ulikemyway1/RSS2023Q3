import BaseElement from '../utils/BaseElement';
import './statisticBoard.scss';

export default class StatisticBoard {
    content = new BaseElement('section', undefined, [
        'statistic-board',
    ]).getElement();

    getContent() {
        return this.content;
    }
}
