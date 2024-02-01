import { renderCells } from './renderCells.js';
import { isSolve, pickedCells } from './appState.js';
import { blackCells } from './appState.js';
import { allCells } from './appState.js';
import {
    infoBox,
    showSolutionBtn,
    resetGameBtn,
    saveGameBtn,
    timer,
    horClueCells,
    vertClueCells,
} from './renderMainApp.js';
import { DB } from './levels.js';
import { modal } from './showWinModal.js';
import { gameField } from './renderMainApp.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { renderClues } from './renderClues.js';
import { renderClueCells } from './renderClueCells.js';

export function continueGame() {
    const prevGameIndex = +localStorage.getItem('prevGameIndex_ULIKE');
    console.log(typeof prevGameIndex);
    if (prevGameIndex) {
        infoBox.textContent = DB[prevGameIndex].name;
        blackCells.clear();
        pickedCells.clear();
        const savedPickedCells = JSON.parse(
            localStorage.getItem('savedPickedCells_ULIKE'),
        );
        const savedCrossedCells = JSON.parse(
            localStorage.getItem('savedCrossedCells_ULIKE'),
        );
        allCells.forEach((cell) => cell.remove());
        while (allCells.length !== 0) {
            allCells.pop();
        }
        renderCells(DB[prevGameIndex].arr);
        allCells.forEach((cell) => {
            if (savedCrossedCells.indexOf(cell.id) !== -1) {
                cell.classList.add('crossed');
            }
            if (savedPickedCells.indexOf(cell.id) !== -1) {
                cell.classList.add('picked');
                pickedCells.add(cell);
            }
        });
        timer.stop();
        const passedTime = JSON.parse(localStorage.getItem('passedTime_ULIKE'));
        if (passedTime) {
            timer.setTime(passedTime);
        } else {
            timer.setTime(0);
        }

        timer.render();

        if (modal) {
            modal.remove();
            gameField.addEventListener('click', gameFieldClickHandler);
            isSolve[0] = false;
            showSolutionBtn.disabled = false;
            saveGameBtn.disabled = false;
            resetGameBtn.disabled = false;
        }
        gameField.classList.remove(
            'app__game-field_5x5',
            'app__game-field_10x10',
            'app__game-field_15x15',
        );

        switch (DB[prevGameIndex].level) {
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

        renderClueCells(DB[prevGameIndex].arr);
        renderClues(DB[prevGameIndex].arr);
        console.log(DB[prevGameIndex].arr);
    }
}
