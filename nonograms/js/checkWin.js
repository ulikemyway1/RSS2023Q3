import { pickedCells } from './appState.js';
import { blackCells } from './appState.js';
export function checkWin() {
    if ([...pickedCells].every((cell) => blackCells.has(cell))) {
        console.log('WIN!!!');
    }
}
