import { settings } from "./settings.js";
import { showCorrectLetter } from "./showCorrectLetter.js";
import { increaseIncorrectCounter } from "./increaseIncorrectCounter.js"
import { disableButton } from "./disableButton.js";
import { checkWin } from "./checkWin.js";
import {calculateOpenedLetters} from "./calculateOpenedLetters.js"
export function checkLetter(e) {
    if (settings.currentLetters.indexOf(e) !== -1 || settings.currentLetters.indexOf(e.target ? e.target.textContent : null) !== -1) {
        showCorrectLetter(e);
        settings.openedLetters = calculateOpenedLetters();
        checkWin();
    } else {
        increaseIncorrectCounter();
    }
    disableButton(e);
}