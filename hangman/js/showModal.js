import { settings } from "./settings.js";
import { createElement } from "./createElement.js";
import { startNewGame } from "./startNewGame.js";
export function showModal(option) {
    settings.inputEnabled = false;
    let modalText;
    option === 'win' ? modalText = 'You win!' : modalText = "You've lost!";
    const modal = createElement('section', 'modal', null, modalText);
    modal.classList.add(`modal_${option}`)
    const button = createElement('button', 'btn-play-again', null, 'Play again');
    button.addEventListener('click', () => {
        if (!settings.modalIsDisabled) {
            startNewGame();
        }
    });

    const answerBox = createElement('div', 'answer-box', null, 'The secret word is');
    answerBox.append(createElement('span', 'answer-word', null, settings.currentLetters.join('')));
    modal.append(answerBox, button);
    const overlay = createElement('div', 'overlay', null, null);
    document.body.prepend(overlay);
    document.body.prepend(modal);
    setTimeout(() => {
        modal.classList.add('modal_visible');
        settings.modalIsDisabled = false;
    }, 500)
    setTimeout(() => overlay.classList.add('overlay_visible'), 500)

}