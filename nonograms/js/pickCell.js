import { checkWin } from './checkWin.js';
import { blackCells } from './appState.js';
import { pickedCells } from './appState.js'; 
export function pickCell(cell) {
    cell.classList.remove('crossed');
    cell.classList.toggle('picked');

    if (pickedCells.has(cell)) {
        pickedCells.delete(cell);
    } else {
        pickedCells.add(cell);
    }

    if (pickedCells.size === blackCells.size) {
        checkWin();
    }
}
