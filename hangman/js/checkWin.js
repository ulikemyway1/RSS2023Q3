import { settings } from "./settings.js";
import { showModal } from "./showModal.js";
export function checkWin() {
    if (settings.openedLetters === settings.currentLetters.length) {
        showModal('win');
    }
}