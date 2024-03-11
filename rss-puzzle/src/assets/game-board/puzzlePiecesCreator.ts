import BaseElement from '../utils/BaseElement';
import gameBoard from './gameBoard';
import movePiece from './movePiece';

export default class PuzzlePiecesCreator {
    private sentence;

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
            piece.addEventListener('click', () => {
                if (piece.parentElement === gameBoard.getSourceBlock()) {
                    const dist = gameBoard.getResultBlock();
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
                puzzlePieces.push(item);
            }
        });

        return puzzlePieces;
    }
}
