import { blackCells, boardIsBlocked, contextMenuIsBlocked } from './appState.js';
import { resetGame } from './resetGame.js';
import { gameField, saveGameBtn } from './renderMainApp.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { crossCell } from './crossCell.js';
import { prevDef } from './prevDef.js';

export function showSolution() {
    resetGame();
    [...blackCells].forEach((cell) => cell.classList.add('picked'));
    saveGameBtn.disabled = true;
    boardIsBlocked[0] = true;
    gameField.removeEventListener('click', gameFieldClickHandler);
    gameField.removeEventListener('contextmenu', crossCell);
    gameField.addEventListener('contextmenu', prevDef);
    contextMenuIsBlocked[0] = true;
}
