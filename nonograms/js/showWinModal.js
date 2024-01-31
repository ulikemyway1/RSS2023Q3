import { createElement } from './createElement.js';
import { playRandomGame } from './playRandomGame.js';
import {
    gameFieldWrapper,
    resetGameBtn,
    saveGameBtn,
    showSolutionBtn,
} from './renderMainApp.js';
import { timer } from './renderMainApp.js';
export let modal;

export function showWinModal() {
    modal = createElement('div', 'win-modal');
    const modalText = createElement(
        'p',
        null,
        'modal__text',
        `Great! You have solved the nonogram in ${timer.getTime()} seconds!`,
    );

    const randomGameBtn = createElement(
        'button',
        'random-game-btn',
        ['button'],
        'Play Random Game',
    );
    randomGameBtn.addEventListener('click', playRandomGame)
    modal.append(modalText, randomGameBtn);
    gameFieldWrapper.before(modal, gameFieldWrapper);
    timer.stop();
    showSolutionBtn.disabled = true;
    saveGameBtn.disabled = true;
    resetGameBtn.disabled = true;
    return modal;
}
