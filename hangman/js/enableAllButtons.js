import { virtualKeyBoard } from "./createLetterButtons.js";
export function enableAllButtons() {
    virtualKeyBoard.forEach((button) => {
        button.disabled = false;
        button.classList.remove('letter-button_disabled')
    })
}