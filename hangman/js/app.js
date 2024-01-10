import { createElement } from "./createElement.js";
import { settings } from "./settings.js";
import { showQuestion } from "./showQuestion.js";
import { showLetterButtons } from "./showLetterButtons.js";
import { checkLetter } from "./checkLetter.js";

document.addEventListener('DOMContentLoaded', () => {
    //render page template
    const letters = [];

    for (let s = 65; s <= 90; s++) {
        letters.push(String.fromCharCode(s));
    }

    function renderApp() {
        const app = createElement('main', 'main', null, null);
        const gallowContainer = createElement('section', 'gallow-container', null, null);

        app.append(gallowContainer);

        const textArea = createElement('section', 'text-area', null, null);
        app.append(textArea);

        const wordLine = createElement('div', 'word-line', null, null);
        textArea.append(wordLine);

        const questionLine = createElement('p', 'question-line', null, null);
        textArea.append(questionLine);

        const gameStat = createElement('p', 'game-stat', null, null);
        gameStat.append('Incorrect guesses ', createElement('span', null, 'incorrectAmmount', '0'), '/6');

        textArea.append(gameStat);

        const keyBoard = createElement('section', 'key-board', null, null);
        app.append(keyBoard);

        showLetterButtons(letters, keyBoard);

        showQuestion(questionLine);

        document.body.prepend(app);
    }

    renderApp();

    document.addEventListener('keyup', (e) => {
        if (settings.inputEnabled && letters.includes(e.key.toUpperCase()) && !document.querySelector(`button[data-letter="${e.key.toUpperCase()}"]`).disabled) {
            checkLetter(e.key.toUpperCase())
        }

    })


});
