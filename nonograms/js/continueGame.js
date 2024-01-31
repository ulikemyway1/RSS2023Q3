import { renderCells } from './renderCells.js';
import { isSolve, pickedCells } from './appState.js';
import { blackCells } from './appState.js';
import { allCells } from './appState.js';
import { infoBox, timer } from './renderMainApp.js';
import { DB } from './levels.js';
import { modal } from './showWinModal.js';
import { gameField } from './renderMainApp.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
export function continueGame() {
    const prevGameIndex = localStorage.getItem('prevGameIndex_ULIKE');
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
        }
        
    }
}
