import { blackCells, boardIsBlocked } from './appState.js';
import { resetGame } from './resetGame.js';
import { gameField, saveGameBtn } from './renderMainApp.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';

export function showSolution() {
    resetGame();
    [...blackCells].forEach((cell) => cell.classList.add('picked'));
    saveGameBtn.disabled = true;
    boardIsBlocked[0] = true;
    gameField.removeEventListener('click', gameFieldClickHandler);
}
