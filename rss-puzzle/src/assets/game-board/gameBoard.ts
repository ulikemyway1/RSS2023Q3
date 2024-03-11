import BaseElement from '../utils/BaseElement';
import clearBody from '../utils/clearBody';
import './gameBoard.scss';
import PuzzlePiecesCreator from './puzzlePiecesCreator';

interface IWord {
    audioExample: string;
    id: number;
    textExample: string;
    textExampleTranslate: string;
    word: string;
    wordTranslate: string;
}

interface IWords extends Array<IWord> {}

interface IlevelData {
    id: string;
    name: string;
    imageSrc: string;
    custSrc: string;
    author: string;
    year: string;
}
interface IwordCollectionData {
    rounds: {
        levelData: IlevelData;
        words: IWords;
    }[];
    roundsCount: number;
}
class GameBoard {
    sourceBlock: HTMLElement | null = null;

    resultBlock: HTMLElement | null = null;

    private async init(data: HTMLElement[]) {
        const gameBoard = new BaseElement('section', undefined, [
            'game-board',
        ]).getElement();

        this.sourceBlock = new BaseElement('div', undefined, [
            'game-board__source-block',
        ]).getElement();
        this.resultBlock = new BaseElement('div', undefined, [
            'game-board__result-block',
        ]).getElement();
        this.sourceBlock.append(...data);
        gameBoard.append(this.resultBlock, this.sourceBlock);
        document.body.append(gameBoard);
    }

    public async loadGameBoard() {
        clearBody();
        const data: IwordCollectionData = await fetch(
            'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json'
        )
            .then((response) => response.json())
            .then((data) => data);
        this.init(
            new PuzzlePiecesCreator(
                data.rounds[0].words[0].textExample
            ).getPieces()
        );
    }

    public getResultBlock() {
        return this.resultBlock;
    }

    public getSourceBlock() {
        return this.sourceBlock;
    }
}

const gameBoard = new GameBoard();

export default gameBoard;
