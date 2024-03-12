import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import clearBody from '../utils/clearBody';
import './gameBoard.scss';
import PuzzlePiecesCreator from './puzzlePiecesCreator';

type gameLevels = number;

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

    currentSentence: string[] = [];

    currentPieces: HTMLElement[] | null = null;

    nextBtn: HTMLInputElement = new InputElement(
        'button',
        'Continue',
        undefined,
        undefined,
        ['game-board__next-btn', 'button']
    ).getElement();

    checkBtn = new InputElement('button', 'Check', undefined, undefined, [
        'game-board__check-btn',
        'button',
    ]).getElement();

    constructor(levelNumber: gameLevels, roundNumber: number) {
        this.levelNumber = levelNumber;
        this.roundNumber = roundNumber;
        this.nextBtn.disabled = true;
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
        this.createNewLine();

        this.nextBtn.addEventListener('click', () => {
            if (this.levelData) {
                this.wordNumber += 1;
                this.nextBtn.disabled = true;
                this.createNewLine();
                if (this.wordNumber > 9) {
                    this.wordNumber = 0;
                    this.roundNumber += 1;
                    if (this.resultBlock) {
                        while (this.resultBlock.lastChild) {
                            this.resultBlock.lastChild.remove();
                        }
                        this.createNewLine();
                    }
                }
                if (this.roundNumber > this.levelData.roundsCount) {
                    this.levelNumber += 1;
                    this.roundNumber = 0;
                    if (Number(this.levelNumber) > 6) {
                        this.levelNumber = 1;
                    }
                    this.loadLevel(this.levelNumber);
                    if (this.resultBlock) {
                        while (this.resultBlock.lastChild) {
                            this.resultBlock.lastChild.remove();
                        }
                        this.createNewLine();
                    }
                }
            }

            this.putSentenceInSourceBlock(this.roundNumber, this.wordNumber);
        });

        this.checkBtn.disabled = true;
        this.checkBtn.addEventListener(
            'click',
            this.checkWordsOrder.bind(this)
        );
        gameBoard.append(
            this.resultBlock,
            this.sourceBlock,
            this.nextBtn,
            this.checkBtn
        );
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
            this.currentSentence = sentence.split(' ');
            const puzzlePieces = new PuzzlePiecesCreator(sentence).getPieces();
            while (this.sourceBlock.firstChild) {
                this.sourceBlock.firstChild.remove();
            }
            this.sourceBlock.append(...puzzlePieces);
            this.currentPieces = [...puzzlePieces];
        }
    }

    public checkSentence() {
        if (
            this.currentPieces &&
            this.resultBlock &&
            this.currentPieces.length ===
                this.resultBlock?.lastElementChild?.childElementCount
        ) {
            this.checkBtn.disabled = false;
        } else {
            this.checkBtn.disabled = true;
        }
        const userSentence: string[] = [];
        if (this.sourceBlock && this.sourceBlock.firstChild) {
            this.nextBtn.disabled = true;
        } else if (this.resultBlock && this.resultBlock.lastChild) {
            let currentPiece: ChildNode | null =
                this.resultBlock.lastChild.firstChild;
            while (currentPiece && currentPiece.textContent) {
                userSentence.push(currentPiece.textContent);
                currentPiece = currentPiece.nextSibling;
            }
            if (
                userSentence.join(' ') ===
                this.levelData?.rounds[this.roundNumber].words[this.wordNumber]
                    .textExample
            ) {
                this.nextBtn.disabled = false;
            } else {
                this.nextBtn.disabled = true;
            }
        }
    }

    private checkWordsOrder() {
        if (
            this.resultBlock &&
            this.resultBlock.lastElementChild &&
            this.resultBlock.lastElementChild.childElementCount ===
                this.currentSentence.length
        ) {
            let currentWord =
                this.resultBlock.lastElementChild.firstElementChild;
            for (
                let i = 0;
                i < this.resultBlock.lastElementChild.childElementCount;
                i += 1
            ) {
                if (
                    currentWord &&
                    currentWord.textContent === this.currentSentence[i]
                ) {
                    currentWord.classList.add('correct-position');
                } else if (currentWord) {
                    currentWord.classList.add('wrong-position');
                }
                if (currentWord) currentWord = currentWord.nextElementSibling;
            }
        }
    }

    private createNewLine() {
        const newLine = new BaseElement('div', undefined, [
            'game-board__puzzle-line',
        ]).getElement();
        if (this.resultBlock) this.resultBlock.append(newLine);
    }
}

const gameBoard = new GameBoard(1, 0);

export default gameBoard;
