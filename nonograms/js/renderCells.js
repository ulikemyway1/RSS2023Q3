import { createElement } from './createElement.js';
import { changeGameFieldSize } from './changeGameFieldSize.js';
import { gameField } from './renderMainApp.js';
export function renderCells(arr) {
    for (let i = 1; i <= arr.length ** 2; i += 1) {
        gameField.append(createElement('button', `cell-${i}`, ['cell']));
    }
    changeGameFieldSize();
}
