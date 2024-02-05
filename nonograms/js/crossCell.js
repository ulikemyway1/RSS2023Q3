import { pickedCells } from "./appState";
import { crossedSoundPlay, emptyCellPlay } from "./prepareSounds";
export function crossCell(e) {
    const cell = e.target;
    e.preventDefault();
    if (e.target.classList.contains('cell')) {
    cell.classList.remove('picked');
    cell.classList.toggle('crossed');
    
    if (pickedCells.has(cell)) {
        pickedCells.delete(cell);
    }
    if (!cell.classList.contains('crossed') && !cell.classList.contains('picked')) {
        emptyCellPlay();
    } else {
        crossedSoundPlay();
    }
 }
}
