import { blackCells } from './appState.js';
import { resetGame } from './resetGame.js';
import { saveGameBtn } from './renderMainApp.js';
export function showSolution() {
    resetGame();
    [...blackCells].forEach((cell) => cell.classList.add('picked'));
    saveGameBtn.disabled = true;
}
