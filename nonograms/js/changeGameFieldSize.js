import { gameField } from './renderMainApp.js';
import { arr } from './levels.js';

export function changeGameFieldSize() {
    const sizes = ['app__game-field_5x5', 'app__game-field_10x10', 'app__game-field_15x15'];
    gameField.classList.remove(...sizes);
    if (arr.length === 5) {
        gameField.classList.add(sizes[0]);
    } else if (arr.length === 10) {
        gameField.classList.add(sizes[1]);
    } else if (arr.length === 15) {
        gameField.classList.add(sizes[2]);
    }
}
