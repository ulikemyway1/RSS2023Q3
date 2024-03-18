import gameBoard from '../game-board/gameBoard';
import BaseElement from './BaseElement';

export default function clearBody() {
    gameBoard.gameBoardWrapper = new BaseElement('div', undefined, [
        'wrapper',
        'game-board',
    ]).getElement();
    const { childElementCount } = document.body;
    let currentElement = document.body.firstChild;
    for (let i = 0; i <= childElementCount; i += 1) {
        if (currentElement && currentElement.nodeName !== 'HEADER') {
            currentElement.remove();
        }
        if (currentElement && currentElement.nextSibling)
            currentElement = currentElement.nextSibling;
    }
}
