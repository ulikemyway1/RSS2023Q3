import { pickedCells } from "./appState";
export function crossCell(cell) {
    cell.classList.remove('picked');
    cell.classList.toggle('crossed');
    if (pickedCells.has(cell)) {
        pickedCells.delete(cell);
    }
}
