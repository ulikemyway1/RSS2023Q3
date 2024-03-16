import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import clearBody from '../utils/clearBody';
import PuzzlePiece from './PuzzlePiece';
import './gameBoard.scss';
import movePiece from './movePiece';
import PuzzlePiecesCreator from './puzzlePiecesCreator';
import removeOrderCorectnessresults from './removeOrderCorectnessResults';
import TranslateBox from '../game-features/translateBox';
import ControlPanel from '../control-panel/controlPanels';
import SentencePronunciation from '../game-features/sentencePronunciation';

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
    cutSrc: string;
    author: string;
    year: string;
}

export interface IwordCollectionData {
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

    currentPieces: PuzzlePiece[] | null = null;

    userSentence: string[] = [];

    checkBtn = new InputElement('button', 'Check', undefined, undefined, [
        'game-board__check-btn',
        'button',
    ]).getElement();

    autoCompleteBtn = new InputElement(
        'button',
        'Auto-Complete',
        undefined,
        undefined,
        ['game-board__autocomplete-btn', 'button']
    ).getElement();

    audioHint = new SentencePronunciation();

    audioHintBtn = new SentencePronunciation().getElementView();

    private currentSentenceCompletedCorrectly: boolean = false;

    translateBox = new TranslateBox();

    constructor(levelNumber: gameLevels, roundNumber: number) {
        this.levelNumber = levelNumber;
        this.roundNumber = roundNumber;
    }

    private async init() {
        this.audioHint = new SentencePronunciation();

        this.audioHintBtn = new SentencePronunciation().getElementView();

        this.currentSentenceCompletedCorrectly = false;

        this.translateBox = new TranslateBox();

        const gameBoard = new BaseElement('section', undefined, [
            'game-board',
        ]).getElement();

        this.sourceBlock = new BaseElement('div', undefined, [
            'game-board__source-block',
        ]).getElement();

        this.resultBlock = new BaseElement('div', undefined, [
            'game-board__result-block',
        ]).getElement();

        this.sourceBlock.addEventListener('click', (event) => {
            if (
                event.target instanceof HTMLElement &&
                event.target.classList.contains('puzzle-piece') &&
                this.resultBlock
            ) {
                movePiece(event.target, this.resultBlock);
            }
        });

        this.checkBtn.disabled = true;
        this.checkBtn.addEventListener('click', () => {
            if (!this.translateBox.getStatus()) {
                this.translateBox.isVisible(false);
            } else {
                this.translateBox.isVisible(true);
            }

            if (!this.audioHint.getStatus()) {
                this.audioHintBtn.classList.remove('active');
            } else {
                this.audioHintBtn.classList.add('active');
            }

            this.autoCompleteBtn.disabled = false;
            if (!this.currentSentenceCompletedCorrectly) {
                this.checkWordsOrder.bind(this)();
            } else {
                this.checkBtn.value = 'Check';
                this.checkBtn.disabled = true;
                removeOrderCorectnessresults();
                if (this.levelData) {
                    this.wordNumber += 1;
                    if (this.wordNumber > 9) {
                        this.wordNumber = 0;
                        this.roundNumber += 1;
                        if (this.resultBlock) {
                            while (this.resultBlock.lastChild) {
                                this.resultBlock.lastChild.remove();
                            }
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
                        }
                    }
                }
                if (this.resultBlock && this.resultBlock.lastElementChild)
                    this.resultBlock.lastElementChild.classList.add(
                        'completed'
                    );
                this.putSentenceInSourceBlock(
                    this.roundNumber,
                    this.wordNumber
                );
            }
        });
        this.autoCompleteBtn.addEventListener(
            'click',
            this.autoComplete.bind(this)
        );
        const btnWrapper = new BaseElement('div', undefined, [
            'game-board__button-wrapper',
        ]).getElement();

        this.audioHintBtn.addEventListener('click', () => {
            this.audioHint.playAudio();
            this.audioHint
                .getElement()
                .addEventListener('ended', () =>
                    this.audioHintBtn.classList.remove('speaking')
                );
            this.audioHintBtn.classList.add('speaking');
        });

        btnWrapper.append(
            this.checkBtn,
            this.audioHintBtn,
            this.autoCompleteBtn
        );

        gameBoard.append(
            this.translateBox.getView(),
            this.resultBlock,
            this.sourceBlock,
            btnWrapper
        );

        document.body.append(
            new ControlPanel().getElement(),
            this.audioHint.getElement(),
            gameBoard
        );
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
            this.translateBox.setText(
                this.levelData.rounds[roundNumber].words[wordNumber]
                    .textExampleTranslate
            );
            this.audioHint.setSource(
                `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${this.levelData.rounds[roundNumber].words[wordNumber].audioExample}`
            );
            this.audioHint.getElement().load();
            this.currentSentence = sentence.split(' ');
            const puzzlePieces = new PuzzlePiecesCreator(sentence).getPieces();
            while (this.sourceBlock.firstChild) {
                this.sourceBlock.firstChild.remove();
            }
            this.createNewLine(puzzlePieces.length, this.sourceBlock);
            if (this.sourceBlock.firstElementChild) {
                let currentElement =
                    this.sourceBlock.firstElementChild.firstElementChild;
                for (let i = 0; i < puzzlePieces.length; i += 1) {
                    const length =
                        puzzlePieces[i].getElement().dataset.parentWidth;
                    if (length && currentElement instanceof HTMLElement) {
                        currentElement.style.width = length;
                        currentElement.append(puzzlePieces[i].getElement());
                        currentElement = currentElement.nextElementSibling;
                    }
                }
            }
            this.currentPieces = [...puzzlePieces];
            if (this.resultBlock)
                this.createNewLine(puzzlePieces.length, this.resultBlock);
        }
    }

    public checkSentence() {
        this.userSentence = [];

        if (
            this.resultBlock &&
            this.resultBlock.lastElementChild &&
            this.resultBlock.lastElementChild.firstChild
        ) {
            let currentPiece: ChildNode | null =
                this.resultBlock.lastElementChild.firstElementChild;

            for (
                let i = 0;
                i <= this.resultBlock.lastElementChild.childElementCount;
                i += 1
            ) {
                if (
                    currentPiece &&
                    currentPiece.firstChild &&
                    currentPiece.firstChild.textContent
                ) {
                    this.userSentence.push(currentPiece.firstChild.textContent);
                    currentPiece = currentPiece.nextSibling;
                }
            }
            if (
                this.userSentence.join(' ') ===
                this.levelData?.rounds[this.roundNumber].words[this.wordNumber]
                    .textExample
            ) {
                this.checkBtn.value = 'Continue';
                this.currentSentenceCompletedCorrectly = true;
                this.audioHintBtn.classList.add('active');
                if (!this.translateBox.getStatus())
                    this.translateBox.isVisible(true);
            } else {
                this.currentSentenceCompletedCorrectly = false;
                this.checkBtn.value = 'Check';
                if (!this.translateBox.getStatus()) {
                    this.translateBox.isVisible(false);
                } else {
                    this.translateBox.isVisible(true);
                }
            }
        }
    }

    public autoComplete() {
        removeOrderCorectnessresults();
        if (this.resultBlock && this.resultBlock.lastElementChild)
            this.resultBlock.lastElementChild.classList.add('completed');
        if (this.currentPieces && this.sourceBlock) {
            const correctOrderArray = this.currentPieces.sort(
                (a, b) => a.getOrder() - b.getOrder()
            );
            this.currentPieces.forEach((item) => {
                if (this.sourceBlock)
                    movePiece(item.getElement(), this.sourceBlock);
            });
            correctOrderArray.forEach((puzzle) => {
                if (this.resultBlock)
                    movePiece(puzzle.getElement(), this.resultBlock);
            });
            this.autoCompleteBtn.disabled = true;
        }
        this.audioHintBtn.classList.add('active');
    }

    private checkWordsOrder() {
        if (
            this.resultBlock &&
            this.resultBlock.lastElementChild &&
            this.resultBlock.lastElementChild.firstElementChild &&
            this.resultBlock.lastElementChild.childElementCount ===
                this.currentSentence.length
        ) {
            let currentElement =
                this.resultBlock.lastElementChild.firstElementChild
                    .firstElementChild;
            for (
                let i = 0;
                i < this.resultBlock.lastElementChild.childElementCount;
                i += 1
            ) {
                if (
                    currentElement &&
                    currentElement.textContent === this.currentSentence[i]
                ) {
                    currentElement.classList.add('correct-position');
                } else if (currentElement) {
                    currentElement.classList.add('wrong-position');
                }
                if (
                    currentElement &&
                    currentElement.parentElement &&
                    currentElement.parentElement.nextElementSibling
                )
                    currentElement =
                        currentElement.parentElement.nextElementSibling
                            .firstElementChild;
            }
        }
    }

    private createNewLine(childernAmont: number, parent: HTMLElement) {
        const newLine = new BaseElement('div', undefined, [
            'game-board__puzzle-line',
        ]).getElement();
        if (parent.classList.contains('game-board__result-block')) {
            newLine.addEventListener('click', (event) => {
                if (
                    event.target instanceof HTMLElement &&
                    event.target.classList.contains('puzzle-piece') &&
                    this.sourceBlock &&
                    !newLine.classList.contains('completed')
                ) {
                    movePiece(event.target, this.sourceBlock);
                }
            });
        }
        for (let i = 1; i <= childernAmont; i += 1) {
            newLine.append(
                new BaseElement('div', undefined, [
                    'game-board__puzzle-line-child',
                ]).getElement()
            );
        }
        if (parent) parent.append(newLine);
    }
}

const gameBoard = new GameBoard(1, 0);

export default gameBoard;
