import { createElement } from "./createElement.js";
import { settings } from "./settings.js";
import { checkLetter } from "./checkLetter.js";
export const virtualKeyBoard = [];
export function createLetterButtons(letter) {
    const button = createElement('button', 'letter-button', null, letter);
    button.setAttribute('data-letter', letter);
    button.addEventListener('click', (e) => {
        if (settings.inputEnabled) {
            checkLetter(e)
        }
    })
    virtualKeyBoard.push(button);
    return button;
}