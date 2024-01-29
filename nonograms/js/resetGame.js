import { allCells } from './renderCells.js';
import { pickedCells } from './pickCell.js';
export function resetGame() {
    allCells.forEach((cell) => {
        cell.classList.remove('picked', 'crossed');
    });
    pickedCells.clear();
}
