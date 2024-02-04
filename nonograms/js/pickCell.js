import { checkWin } from './checkWin.js';
import { blackCells } from './appState.js';
import { pickedCells } from './appState.js'; 
import { emptyCellPlay, pickSoundPlay } from './prepareSounds.js';
export function pickCell(cell) {
    cell.classList.remove('crossed');
    cell.classList.toggle('picked');
    
    if (pickedCells.has(cell)) {
        pickedCells.delete(cell);
        emptyCellPlay();
    } else {
        pickedCells.add(cell);
    }
    if (cell.classList.contains('picked')) {
        pickSoundPlay();
    }
    if (pickedCells.size === blackCells.size) {
        checkWin();
    }
}
