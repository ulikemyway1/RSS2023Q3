import { pickedCells } from './pickCell.js';
import { blackCells } from './renderCells.js';

export function checkWin() {
    if ([...pickedCells].every((cell) => blackCells.has(cell))) {
        console.log('WIN!!!');
    }
}
