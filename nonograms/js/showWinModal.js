import { createElement } from './createElement.js';
import { playRandomGame } from './playRandomGame.js';
import { winSoundPlay } from './prepareSounds.js';
import {
    gameFieldWrapper,
    gameInfoWrapper,
    resetGameBtn,
    saveGameBtn,
    showSolutionBtn,
} from './renderMainApp.js';
import { timer } from './renderMainApp.js';
export let modal;

export function showWinModal() {
    winSoundPlay();
    modal = createElement('div', 'win-modal');
    const modalText = createElement(
        'p',
        null,
        'modal__text',
        `Great! You have solved the nonogram in ${timer.getTime()} seconds!`,
    );

    const randomGameBtn = createElement(
        'button',
        'modal-win-random-btn',
        ['button'],
        'Play Random Game',
    );
    randomGameBtn.addEventListener('click', () => {
        playRandomGame()
    })
    modal.append(modalText, randomGameBtn);
    gameInfoWrapper.append(modal);
    timer.stop();
    showSolutionBtn.disabled = true;
    saveGameBtn.disabled = true;
    resetGameBtn.disabled = true;
    return modal;
}
