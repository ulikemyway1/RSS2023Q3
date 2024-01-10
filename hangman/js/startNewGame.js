import { settings } from "./settings.js";
import { showQuestion } from "./showQuestion.js";
import { enableAllButtons } from "./enableAllButtons.js";
export function startNewGame() {
    settings.inputEnabled = true;
    const questionLine = document.querySelector('.question-line');
    questionLine.previousSibling.textContent = '';
    showQuestion(questionLine);
    document.getElementById('incorrectAmmount').textContent = '0';
    document.querySelector('.modal').remove();
    document.querySelector('.overlay').remove();
    enableAllButtons();
}