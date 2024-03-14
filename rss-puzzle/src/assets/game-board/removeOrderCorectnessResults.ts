import gameBoard from './gameBoard';

export default function removeOrderCorectnessresults() {
    if (gameBoard.currentPieces)
        gameBoard.currentPieces.forEach((piece) =>
            piece.classList.remove('correct-position', 'wrong-position')
        );
}
