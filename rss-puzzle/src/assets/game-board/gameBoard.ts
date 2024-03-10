import BaseElement from '../utils/BaseElement';
import clearBody from '../utils/clearBody';
import './gameBoard.scss';

class GameBoard {
    content: HTMLElement | null = null;

    constructor() {
        this.content = this.init();
    }

    private init() {
        const gameBoard = new BaseElement(
            'section',
            undefined,
            ['game-board'],
            'Game Board'
        ).getElement();

        return gameBoard;
    }

    public loadGameBoard() {
        clearBody();
        if (this.content) document.body.append(this.content);
    }
}

const gameBoard = new GameBoard();

export default gameBoard;
