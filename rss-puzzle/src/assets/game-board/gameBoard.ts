import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import clearBody from '../utils/clearBody';
import './gameBoard.scss';
import PuzzlePiecesCreator from './puzzlePiecesCreator';

type gameLevels = '1' | '2' | '3' | '4' | '5' | '6';

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

    levelData: IwordCollectionData | null = null;

    levelNumber: gameLevels;

    roundNumber: number;

    wordNumber: number = 0;

    constructor(levelNumber: gameLevels, roundNumber: number) {
        this.levelNumber = levelNumber;
        this.roundNumber = roundNumber;
    }

    private async init() {
        const gameBoard = new BaseElement('section', undefined, [
            'game-board',
        ]).getElement();

        this.sourceBlock = new BaseElement('div', undefined, [
            'game-board__source-block',
        ]).getElement();
        this.resultBlock = new BaseElement('div', undefined, [
            'game-board__result-block',
        ]).getElement();

        const nextBtn = new InputElement(
            'button',
            'Continue',
            undefined,
            undefined,
            ['game-board__next-btn', 'button']
        ).getElement();

        nextBtn.addEventListener('click', () => {
            if (this.levelData) {
                this.wordNumber += 1;
                if (this.wordNumber > 9) {
                    this.wordNumber = 0;
                    this.roundNumber += 1;
                    if (this.roundNumber > this.levelData.roundsCount) {
                        this.levelNumber += 1;
                        this.roundNumber = 0;
                        if (Number(this.levelNumber) > 6) {
                            this.levelNumber = '1';
                            this.loadLevel(this.levelNumber);
                        }
                    }
                }
            }

            this.putSentenceInSourceBlock(this.roundNumber, this.wordNumber);
        });
        gameBoard.append(this.resultBlock, this.sourceBlock, nextBtn);
        document.body.append(gameBoard);
    }

    public async loadGameBoard() {
        clearBody();
        await this.loadLevel(this.levelNumber);
        if (this.levelData) this.init();
        this.putSentenceInSourceBlock(this.roundNumber, this.wordNumber);
    }

    public getResultBlock() {
        return this.resultBlock;
    }

    public getSourceBlock() {
        return this.sourceBlock;
    }

    private async loadLevel(level: gameLevels) {
        this.levelData = await fetch(
            `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${level}.json`
        )
            .then((response) => response.json())
            .then((data) => data);
    }

    private putSentenceInSourceBlock(roundNumber: number, wordNumber: number) {
        if (this.levelData && this.sourceBlock) {
            const sentence =
                this.levelData.rounds[roundNumber].words[wordNumber]
                    .textExample;
            const puzzlePieces = new PuzzlePiecesCreator(sentence).getPieces();

            while (this.sourceBlock.firstChild) {
                this.sourceBlock.firstChild.remove();
            }

            this.sourceBlock.append(...puzzlePieces);
        }
    }
}

const gameBoard = new GameBoard('3', 1);

export default gameBoard;
