import { allCells, boardIsBlocked, contextMenuIsBlocked } from './appState.js';
import { pickedCells } from './appState.js';
import { crossCell } from './crossCell.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { prevDef } from './prevDef.js';
import { gameField, saveGameBtn, timer } from './renderMainApp.js';
export function resetGame() {
    allCells.forEach((cell) => {
        cell.classList.remove('picked', 'crossed');
    });
    pickedCells.clear();
    saveGameBtn.disabled = false;
    timer.stop();
    timer.reset();
    timer.render();
    if (boardIsBlocked[0]) {
        gameField.addEventListener('click', gameFieldClickHandler);
        boardIsBlocked[0] = false;
    }
    if (contextMenuIsBlocked[0]) {
        gameField.addEventListener('contextmenu', crossCell);
        gameField.removeEventListener('contextmenu', prevDef);
        contextMenuIsBlocked[0] = false;
    }
}
