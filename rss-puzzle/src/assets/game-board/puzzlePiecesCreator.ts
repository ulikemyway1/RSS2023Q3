import BaseElement from '../utils/BaseElement';
import gameBoard from './gameBoard';
import movePiece from './movePiece';

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

            piece.addEventListener('click', () => {
                const resultBlock = gameBoard.getResultBlock();
                const sourceBlock = gameBoard.getSourceBlock();
                if (
                    sourceBlock &&
                    piece.parentElement &&
                    piece.parentElement.parentElement === resultBlock
                ) {
                    const dist = sourceBlock;
                    if (dist) movePiece(piece, dist);
                } else if (resultBlock && piece.parentElement === sourceBlock) {
                    const dist = resultBlock.lastElementChild;
                    if (dist) movePiece(piece, dist);
                }
            });
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
                    gameBoard.checkSentence.bind(gameBoard)();
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
            const parentWidth = parseFloat(getComputedStyle(parent).width);
            const letterWidth =
                (parentWidth / this.totalLettersAmount / parentWidth) * 100;
            arr.forEach((item) => {
                const piece = item;
                if (piece.textContent)
                    piece.style.width = `${piece.textContent.length * letterWidth}%`;
            });
        }
    }
}
