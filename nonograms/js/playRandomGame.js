import { infoBox, timer } from './renderMainApp.js';
import {
    showSolutionBtn,
    saveGameBtn,
    resetGameBtn,
    gameField,
} from './renderMainApp.js';
import { modal } from './showWinModal.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { allCells, isSolve } from './appState.js';
import { DB } from './levels.js';
import { renderCells } from './renderCells.js';
export function playRandomGame() {
    if (modal) {
        modal.remove();
        gameField.addEventListener('click', gameFieldClickHandler);
        isSolve[0] = false;
        showSolutionBtn.disabled = false;
        saveGameBtn.disabled = false;
        resetGameBtn.disabled = false;
    }
    timer.reset();
    timer.render();

    allCells.forEach((cell) => cell.remove());
    while (allCells.length !== 0) {
        allCells.pop();
    }

    const index = Math.floor(Math.random() * DB.length);
    renderCells(DB[index].arr);
    infoBox.textContent = DB[index].name;
}
