import { createElement } from './createElement.js';
import { changeGameFieldSize } from './changeGameFieldSize.js';
import { gameField } from './renderMainApp.js';
export const allCells = [];
export const blackCells = new Set();

export function renderCells(arr) {
    changeGameFieldSize();

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            let cell = createElement('div', `cell-${i}`, ['cell']);
            if (i === 4 || i === 9 || i === 14 || i === 19) {
                cell.classList.add('border-bottom');
            }
            if (j === 4 || j === 9 || j === 14 || j === 19) {
                cell.classList.add('border-right');
            }
            gameField.append(cell);

            if (arr[i][j]) {
                blackCells.add(cell);
            }
            allCells.push(cell);
        }
    }
}
