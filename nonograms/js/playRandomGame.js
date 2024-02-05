import {
    horClueCells,
    infoBox,
    timer,
    vertClueCells,
} from './renderMainApp.js';
import {
    showSolutionBtn,
    saveGameBtn,
    resetGameBtn,
    gameField,
} from './renderMainApp.js';
import { modal } from './showWinModal.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import {
    allCells,
    blackCells,
    boardIsBlocked,
    contextMenuIsBlocked,
    currentIndex,
    gameLevel,
    gameName,
    isSolve,
    pickedCells,
} from './appState.js';
import { DB } from './levels.js';
import { renderCells } from './renderCells.js';
import { renderClueCells } from './renderClueCells.js';
import { renderClues } from './renderClues.js';
import { crossCell } from './crossCell.js';
import { prevDef } from './prevDef.js';

export function playRandomGame(index) {

    if (modal) {
        modal.remove();
    }
    isSolve[0] = false;
    showSolutionBtn.disabled = false;
    saveGameBtn.disabled = false;
    resetGameBtn.disabled = false;
    if (boardIsBlocked[0]) {
        gameField.addEventListener('click', gameFieldClickHandler);
        boardIsBlocked[0] = false;
    }
    if (contextMenuIsBlocked[0]) {
        gameField.addEventListener('contextmenu', crossCell);
        gameField.removeEventListener('contextmenu', prevDef);
        contextMenuIsBlocked[0] = false;
    }
    timer.reset();
    timer.render();

    allCells.forEach((cell) => cell.remove());
    while (allCells.length !== 0) {
        allCells.pop();
    }

    if (!index) {
        index = Math.floor(Math.random() * DB.length);
        currentIndex[0] = index;
    }
    renderCells(DB[index].arr);
    infoBox.textContent = DB[index].name;
    gameField.classList.remove(
        'app__game-field_5x5',
        'app__game-field_10x10',
        'app__game-field_15x15',
    );

    switch (DB[index].level) {
        case 'Easy':
            gameField.classList.add('app__game-field_5x5');
            break;
        case 'Medium':
            gameField.classList.add('app__game-field_10x10');
            break;
        case 'Hard':
            gameField.classList.add('app__game-field_15x15');
            break;
    }

    horClueCells.forEach((clue) => clue.remove());
    vertClueCells.forEach((clue) => clue.remove());
    while (horClueCells.length > 0) {
        horClueCells.pop();
    }
    while (vertClueCells.length > 0) {
        vertClueCells.pop();
    }
    gameName[0] = DB[index].name;
    gameLevel[0] = DB[index].level;
    pickedCells.clear();
    renderClueCells(DB[index].arr);
    renderClues(DB[index].arr);
}
