import { pickedCells } from './pickCell.js';
export function crossCell(cell) {
    cell.classList.remove('picked');
    cell.classList.toggle('crossed');
    if (pickedCells.has(cell)) {
        pickedCells.delete(cell);
    }
}
