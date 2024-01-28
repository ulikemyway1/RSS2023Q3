import { countClues } from "./countClues.js";
import { arr } from './levels.js';
import { vertClueCells } from "./renderMainApp.js";
import { horClueCells } from "./renderMainApp.js";
import { createElement } from "./createElement.js";
export function renderClues() {
    const clues = countClues(arr);
    console.log(clues)
    vertClueCells.forEach((cell, index) => {
        clues.col[index].forEach(clue => cell.append(createElement('div', null, ['clue'], clue)))
    })
    horClueCells.forEach((cell, index) => {
        clues.row[index].forEach(clue => cell.append(createElement('div', null, ['clue'], clue)))
    })
}