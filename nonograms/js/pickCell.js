import { checkWin } from './checkWin.js';
import { blackCells } from './renderCells.js';
export const pickedCells = new Set();
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
