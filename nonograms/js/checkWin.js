import { isSolve, pickedCells } from './appState.js';
import { blackCells } from './appState.js';
import { showWinModal } from './showWinModal.js';
export function checkWin() {
    if ([...pickedCells].every((cell) => blackCells.has(cell))) {
        showWinModal();
        isSolve[0] = true;
    }
}
