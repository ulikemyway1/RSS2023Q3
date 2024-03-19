import BaseElement from '../utils/BaseElement';
import './statisticBoard.scss';

class StatisticBoard {
    content = new BaseElement('section', undefined, [
        'statistic-board',
    ]).getElement();

    getContent() {
        return this.content;
    }
}

const statBoard = new StatisticBoard();
export default statBoard;
