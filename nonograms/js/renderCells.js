import { createElement } from './createElement.js';
import { changeGameFieldSize } from './changeGameFieldSize.js';
import { gameField } from './renderMainApp.js';
export function renderCells(arr) {
    for (let i = 1; i <= arr.length ** 2; i += 1) {

        let cell;

        if (i % 5 === 0) {
            cell = createElement('button', `cell-${i}`, ['cell', 'border-right']);
            if ((arr.length === 10 && i >= 41 && i <= 50) || (arr.length === 15 && ((i >= 61 && i <= 75) || (i >= 136 && i <= 150) || (i >= 211 && i <= 225)))) {
                cell.classList.add('border-bottom');
            }
        }
        else if ((arr.length === 5 && i >= 21 && i <= 25) || (arr.length === 10 && ((i >= 41 && i <= 50) || (i >= 91 && i <= 100))) || (arr.length === 15 && ((i >= 61 && i <= 75) || (i >= 136 && i <= 150) || (i >= 211 && i <= 225)))) {
            cell = createElement('button', `cell-${i}`, ['cell', 'border-bottom']);
        }
        else {
            cell = createElement('button', `cell-${i}`, ['cell']);
        }
        gameField.append(cell);
    }
    changeGameFieldSize();
}
