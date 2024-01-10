import { showModal } from "./showModal.js";
export function increaseIncorrectCounter() {
    const incorrectAmmount = document.getElementById('incorrectAmmount');
    incorrectAmmount.textContent = +incorrectAmmount.textContent + 1;
    if (+incorrectAmmount.textContent >= 6) {
        showModal('lose');
    }
}