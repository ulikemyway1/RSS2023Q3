import { allCells, boardIsBlocked } from './appState.js';
import { pickedCells } from './appState.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { gameField, saveGameBtn } from './renderMainApp.js';
export function resetGame() {
    allCells.forEach((cell) => {
        cell.classList.remove('picked', 'crossed');
    });
    pickedCells.clear();
    saveGameBtn.disabled = false;
    if (boardIsBlocked) {
        gameField.addEventListener('click', gameFieldClickHandler);
    }
}
