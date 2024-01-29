import { allCells } from './appState.js';
import { pickedCells } from './appState.js';
export function resetGame() {
    allCells.forEach((cell) => {
        cell.classList.remove('picked', 'crossed');
    });
    pickedCells.clear();
}
