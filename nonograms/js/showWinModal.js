import { createElement } from './createElement.js';
import { gameFieldWrapper } from './renderMainApp.js';
import { timer } from './renderMainApp.js';
export function showWinModal() {
    const modal = createElement('div', 'win-modal', null, `Great! You have solved the nonogram in ${timer.getTime()} seconds!`);
    gameFieldWrapper.before(modal, gameFieldWrapper);
    timer.stop();
    return modal;
}
