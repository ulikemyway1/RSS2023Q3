import { timer } from "./renderMainApp";
import { isSolve } from "./appState";
import { pickCell } from "./pickCell";
export function gameFieldClickHandler (e) {
    e.preventDefault();
        if (e.target.classList.contains('cell')) {
            pickCell(e.target);
            if (!timer.getStatus() && !isSolve[0]) {
                timer.start();
            }
        }
}