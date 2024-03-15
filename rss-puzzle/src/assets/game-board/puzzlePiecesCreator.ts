import BaseElement from '../utils/BaseElement';
import PuzzlePiece from './PuzzlePiece';
import gameBoard from './gameBoard';
import removeOrderCorectnessresults from './removeOrderCorectnessResults';

export default class PuzzlePiecesCreator {
    private sentence;

    private totalLettersAmount: number = 0;

    constructor(sentence: string) {
        this.sentence = sentence;
    }

    public getPieces() {
        const words = this.sentence.split(' ');
        const puzzles: PuzzlePiece[] = [];
        words.forEach((word, index) => {
            const piece = new PuzzlePiece(word, index);
            this.totalLettersAmount += word.length;
            if (piece) {
                puzzles.push(piece);
            }
        });
        const tempArr: (null | undefined | PuzzlePiece)[] = Array(
            puzzles.length * 50
        ).fill(null);
        while (puzzles.length > 0) {
            const index = Math.floor(Math.random() * tempArr.length);
            if (!tempArr[index]) tempArr[index] = puzzles.pop();
        }
        const randomPieceArray = tempArr.filter((item) => item);
        const puzzlePieces: PuzzlePiece[] = [];
        randomPieceArray.forEach((item) => {
            if (item) {
                const puzzleElement = item.getElement();
                if (puzzleElement && puzzleElement instanceof HTMLElement) {
                    item.addEventListener(
                        'click',
                        removeOrderCorectnessresults
                    );
                    item.getElement().append(
                        new BaseElement('div', undefined, [
                            'puzzle-piece-bg',
                        ]).getElement()
                    );
                    puzzlePieces.push(item);
                }
            }
        });
        this.determineWidth(puzzlePieces);
        return puzzlePieces;
    }

    private determineWidth(arr: PuzzlePiece[]): void {
        const parent = gameBoard.getResultBlock();
        if (parent) {
            const parentStyles = getComputedStyle(parent);
            const parentWidth = parseFloat(parentStyles.width);
            const parentPaddings =
                parseFloat(parentStyles.paddingLeft) +
                parseFloat(parentStyles.paddingRight);
            const letterWidth =
                ((parentWidth - parentPaddings) /
                    this.totalLettersAmount /
                    (parentWidth - parentPaddings)) *
                100;
            arr.forEach((item) => {
                const piece = item.getElement();
                if (piece.textContent)
                    piece.dataset.parentWidth = `${piece.textContent.length * letterWidth}%`;
            });
        }
    }
}
