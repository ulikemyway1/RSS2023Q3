import { showModal } from "./showModal.js";
import { addBodyPart } from "./addBodyPart.js";
export function increaseIncorrectCounter() {
    const incorrectAmmount = document.getElementById('incorrectAmmount');
    incorrectAmmount.textContent = +incorrectAmmount.textContent + 1;
    addBodyPart(+incorrectAmmount.textContent - 1)
    if (+incorrectAmmount.textContent >= 6) {
        showModal('lose');
    }
}