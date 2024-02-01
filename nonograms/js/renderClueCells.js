import { createElement } from './createElement.js';
import {
    horClueCells,
    horizontalCluesRow,
    vertClueCells,
    verticalCluesRowWrapper,
} from './renderMainApp.js';

export function renderClueCells(arr) {
    arr.forEach((_, index) => {
        let clueCell;
        if (index === 4 || index === 9 || index === 14) {
            clueCell = createElement('div', `vertClue-${index + 1}`, [
                'cell',
                'clues-row-vert',
                'border-right-clue',
            ]);
        } else {
            clueCell = createElement('div', `vertClue-${index + 1}`, [
                'cell',
                'clues-row-vert',
            ]);
        }

        verticalCluesRowWrapper.append(clueCell);
        vertClueCells.push(clueCell);
    });

    arr.forEach((item, index) => {
        let clueCell;
        if (index === 4 || index === 9) {
            clueCell = createElement('div', `horClue-${index + 1}`, [
                'cell',
                'clues-row-hor',
                'border-bottom',
            ]);
        } else {
            clueCell = createElement('div', `horClue-${index + 1}`, [
                'cell',
                'clues-row-hor',
            ]);
        }

        horizontalCluesRow.append(clueCell);
        horClueCells.push(clueCell);
    });
}
