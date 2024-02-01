import { countClues } from './countClues.js';
import { vertClueCells } from './renderMainApp.js';
import { horClueCells } from './renderMainApp.js';
import { createElement } from './createElement.js';

export function renderClues(arr) {
    const clues = countClues(arr);
    console.log(vertClueCells);
    console.log(clues);
    vertClueCells.forEach((cell, index) => {
        clues.col[index].forEach((clue) =>
            cell.append(createElement('div', null, ['clue'], clue)),
        );
    });
    horClueCells.forEach((cell, index) => {
        clues.row[index].forEach((clue) =>
            cell.append(createElement('div', null, ['clue'], clue)),
        );
    });
}
