import { settings } from "./settings.js";
import { showCorrectLetter } from "./showCorrectLetter.js";
import { increaseIncorrectCounter } from "./increaseIncorrectCounter.js"
import { disableButton } from "./disableButton.js";

export function checkLetter(e) {
    if (settings.currentLetters.indexOf(e) !== -1 || settings.currentLetters.indexOf(e.target ? e.target.textContent : null) !== -1) {
        showCorrectLetter(e)
    } else {
        increaseIncorrectCounter();
    }
    disableButton(e);
}