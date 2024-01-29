import { blackCells } from "./renderCells.js";
export function isRightCell (cell) {
    if (blackCells.has(cell)) {
        console.log('true')
    }
}