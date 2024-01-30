import { createElement } from './createElement.js';
import { pickCell } from './pickCell.js';
import { crossCell } from './crossCell.js';
import { resetGame } from './resetGame.js';
import { saveGame } from './saveGame.js';
import { continueGame } from './continueGame.js';
import { showSolution } from './showSolution.js';
import { gameName } from './appState.js';
import { Timer } from './timer.js';
export const gameField = createElement('section', null, ['app__game-field']);
export const vertClueCells = [];
export const horClueCells = [];
export let saveGameBtn;
export let continueGameBtn;
export let infoBox;
export function renderMainApp(arr) {
    const body = document.body;

    const main = createElement('main', null, ['app']);

    const appHeader = createElement('section', null, ['app__header']);

    const appFooter = createElement('section', null, ['app__footer']);

    const changeThemeBtn = createElement(
        'button',
        'change-theme-btn',
        ['button'],
        'Change Theme',
    );

    const timeInfo = createElement('div', 'time-info', null, 'Time passed: ');
    const timer = new Timer(0, timeInfo);
    timer.render()

    const optionsBtn = createElement(
        'button',
        'options-btn',
        ['button'],
        'Game Options',
    );

    saveGameBtn = createElement(
        'button',
        'save-game-btn',
        ['button'],
        'Save Game',
    );

    saveGameBtn.addEventListener('click', saveGame);

    continueGameBtn = createElement(
        'button',
        'continue-game-btn',
        ['button'],
        'Continue Saved Game',
    );

    continueGameBtn.addEventListener('click', () => {
        continueGame(arr);
    });

    if (!localStorage.getItem('savedPickedCells_ULIKE'), !localStorage.getItem('savedCrossedCells_ULIKE')) {
        continueGameBtn.disabled = true;
    }

    const resetGameBtn = createElement(
        'button',
        'reset-game-btn',
        ['button'],
        'Reset Game',
    );

    resetGameBtn.addEventListener('click', resetGame);

    const showSolutionBtn = createElement(
        'button',
        'show-solution-btn',
        ['button'],
        'Show Solution',
    );

    showSolutionBtn.addEventListener('click', showSolution);

    const horizontalCluesRow = createElement('div', 'horizontal-clues', [
        'clues-row',
        'clues-row_horizontal',
    ]);

    const verticalCluesRow = createElement('div', 'vertical-clues', [
        'clues-row',
        'clues-row_vertical',
    ]);

    arr.forEach((item, index) => {
        let clueCell;
        if (index === 4 || index === 9) {
            clueCell = createElement('div', `horClue-${index + 1}`, [
                'cell',
                'clues-row-hor',
                'border-bottom',
            ]);
        } else {
            clueCell = createElement('div', `horClue-${index + 1}`, [
                'cell',
                'clues-row-hor',
            ]);
        }

        horizontalCluesRow.append(clueCell);
        horClueCells.push(clueCell);
    });

    const verticalCluesRowWrapper = createElement(
        'div',
        'vertical-clues-wrapper',
    );
    verticalCluesRow.append(createElement('div', 'space-fill'));
    arr.forEach((_, index) => {
        let clueCell;
        if (index === 4 || index === 9 || index === 14) {
            clueCell = createElement('div', `vertClue-${index + 1}`, [
                'cell',
                'clues-row-vert',
                'border-right-clue',
            ]);
        } else {
            clueCell = createElement('div', `vertClue-${index + 1}`, [
                'cell',
                'clues-row-vert',
            ]);
        }

        verticalCluesRowWrapper.append(clueCell);
        vertClueCells.push(clueCell);
    });

    verticalCluesRow.append(verticalCluesRowWrapper);

    const innerWapper = createElement('div', 'inner-wrapper');

    const gameFieldWrapper = createElement('div', 'game-field-wapper');

    gameFieldWrapper.append(verticalCluesRow, innerWapper);

    appHeader.append(changeThemeBtn, timeInfo, optionsBtn);

    appFooter.append(
        saveGameBtn,
        continueGameBtn,
        resetGameBtn,
        showSolutionBtn,
    );

    innerWapper.append(horizontalCluesRow, gameField);

    infoBox = createElement('p', null, ['info-box'], gameName);

    main.append(appHeader, infoBox, gameFieldWrapper, appFooter);

    body.append(main);
    gameField.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('cell')) {
            pickCell(e.target);
        }
    });

    gameField.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('cell')) {
            crossCell(e.target);
        }
    });
}
