import { allCells } from './appState.js';
import { pickedCells } from './appState.js';
import { saveGameBtn } from './renderMainApp.js';
export function resetGame() {
    allCells.forEach((cell) => {
        cell.classList.remove('picked', 'crossed');
    });
    pickedCells.clear();
    saveGameBtn.disabled = false;
}
