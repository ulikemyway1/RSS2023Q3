import { renderCells } from './renderCells.js';
import { pickedCells } from './appState.js';
import { blackCells } from './appState.js';
import { allCells } from './appState.js';
export function continueGame(arr) {
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
    renderCells(arr);
    allCells.forEach((cell) => {
        if (savedCrossedCells.indexOf(cell.id) !== -1) {
            cell.classList.add('crossed');
        }
        if (savedPickedCells.indexOf(cell.id) !== -1) {
            cell.classList.add('picked');
            pickedCells.add(cell);
        }
    });
}
