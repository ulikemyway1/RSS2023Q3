import { pickedCells } from './appState.js';
import { blackCells } from './appState.js';
import { infoBox } from './renderMainApp.js';
export function checkWin() {
    if ([...pickedCells].every((cell) => blackCells.has(cell))) {
        infoBox.textContent = 'You win!'
    }
}
