import { allCells } from "./appState.js"
import { continueGameBtn } from "./renderMainApp.js";
import { timer } from "./renderMainApp.js";
export function saveGame() {
    const savedPickedCells = [];
    const savedCrossedCells = [];
    allCells.forEach((cell) => {
        if (cell.classList.contains('picked')) {
            savedPickedCells.push(cell.id);
        }
        if (cell.classList.contains('crossed')) {
            savedCrossedCells.push(cell.id)
        }
    })
    localStorage.setItem('savedPickedCells_ULIKE', JSON.stringify(savedPickedCells));
    localStorage.setItem('savedCrossedCells_ULIKE', JSON.stringify(savedCrossedCells));
    localStorage.setItem('passedTime_ULIKE', timer.getTime())
    continueGameBtn.disabled = false;
}