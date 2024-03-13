import BaseElement from '../utils/BaseElement';
import gameBoard from './gameBoard';

export default class PuzzlePiecesCreator {
    private sentence;

    private totalLettersAmount: number = 0;

    constructor(sentence: string) {
        this.sentence = sentence;
    }

    public getPieces() {
        const words = this.sentence.split(' ');
        const puzzles: HTMLElement[] = [];
        words.forEach((word) => {
            const piece = new BaseElement(
                'span',
                undefined,
                ['puzzle-piece'],
                word
            ).getElement();

            this.totalLettersAmount += word.length;
            puzzles.push(piece);
        });
        const tempArr: (null | HTMLElement | undefined)[] = Array(
            puzzles.length * 50
        ).fill(null);
        while (puzzles.length > 0) {
            const index = Math.floor(Math.random() * tempArr.length);
            if (!tempArr[index]) tempArr[index] = puzzles.pop();
        }
        const randomPieceArray = tempArr.filter((item) => item);
        const puzzlePieces: HTMLElement[] = [];
        randomPieceArray.forEach((item) => {
            if (item instanceof HTMLElement) {
                item.addEventListener('click', () => {
                    if (gameBoard.currentPieces)
                        gameBoard.currentPieces.forEach((piece) =>
                            piece.classList.remove(
                                'correct-position',
                                'wrong-position'
                            )
                        );
                });

                puzzlePieces.push(item);
            }
        });
        this.determineWidth(puzzlePieces);
        return puzzlePieces;
    }

    private determineWidth(arr: HTMLElement[]): void {
        const parent = gameBoard.getResultBlock();
        if (parent) {
            const parentStyles = getComputedStyle(parent);
            const parentWidth = parseFloat(parentStyles.width);
            const parentPaddings =
                parseFloat(parentStyles.paddingLeft) +
                parseFloat(parentStyles.paddingRight);
            const letterWidth =
                (parentWidth - parentPaddings) / this.totalLettersAmount;
            arr.forEach((item) => {
                const piece = item;
                if (piece.textContent)
                    piece.style.width = `${piece.textContent.length * letterWidth}px`;
            });
        }
    }
}
