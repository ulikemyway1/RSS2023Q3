import { createElement } from './createElement.js';
import { crossCell } from './crossCell.js';
import { resetGame } from './resetGame.js';
import { saveGame } from './saveGame.js';
import { continueGame } from './continueGame.js';
import { showSolution } from './showSolution.js';
import { gameName } from './appState.js';
import { Timer } from './timer.js';
import { gameFieldClickHandler } from './gameFieldClickHandler.js';
import { renderClueCells } from './renderClueCells.js';
import { showScoreTable } from './showScoreTable.js';
import { changeTheme } from './changeTheme.js';
export const gameField = createElement('section', null, ['app__game-field']);
export const vertClueCells = [];
export const horClueCells = [];
export let saveGameBtn;
export let showSolutionBtn;
export let continueGameBtn;
export let resetGameBtn;
export let infoBox;
export let timer;
export let timeInfo;
export let gameFieldWrapper;
export let verticalCluesRowWrapper;
export let horizontalCluesRow;
export let main;
export let highScoreTableBtn;
export let changeThemeBtnSlider;
export function renderMainApp(arr) {
    const body = document.body;

    main = createElement('main', null, ['app']);

    const appHeader = createElement('section', null, ['app__header']);

    const appFooter = createElement('section', null, ['app__footer']);

    const changeThemeBtn = createElement('button', 'change-theme-btn', [
        'button',
        'button-switcher',
    ]);
    changeThemeBtnSlider = createElement('div', null, ['button__slider']);
    changeThemeBtn.append(changeThemeBtnSlider);
    changeThemeBtn.addEventListener('click', changeTheme);
    highScoreTableBtn = createElement(
        'button',
        'high-scrore-btn',
        ['button'],
        'High Score Table',
    );
    highScoreTableBtn.addEventListener('click', showScoreTable);
    timeInfo = createElement('div', 'time-info', null, 'Time passed: ');
    timer = new Timer(0, timeInfo);
    timer.render();

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
        continueGame();
    });

    if (
        (!localStorage.getItem('savedPickedCells_ULIKE'),
        !localStorage.getItem('savedCrossedCells_ULIKE'))
    ) {
        continueGameBtn.disabled = true;
    }

    resetGameBtn = createElement(
        'button',
        'reset-game-btn',
        ['button'],
        'Reset Game',
    );

    resetGameBtn.addEventListener('click', resetGame);

    showSolutionBtn = createElement(
        'button',
        'show-solution-btn',
        ['button'],
        'Show Solution',
    );

    showSolutionBtn.addEventListener('click', () => {
        showSolution();
        timer.stop();
    });

    horizontalCluesRow = createElement('div', 'horizontal-clues', [
        'clues-row',
        'clues-row_horizontal',
    ]);

    const verticalCluesRow = createElement('div', 'vertical-clues', [
        'clues-row',
        'clues-row_vertical',
    ]);

    verticalCluesRowWrapper = createElement('div', 'vertical-clues-wrapper');
    verticalCluesRow.append(createElement('div', 'space-fill'));

    renderClueCells(arr);

    verticalCluesRow.append(verticalCluesRowWrapper);

    const innerWapper = createElement('div', 'inner-wrapper');

    gameFieldWrapper = createElement('div', 'game-field-wapper');

    gameFieldWrapper.append(verticalCluesRow, innerWapper);

    appHeader.append(changeThemeBtn, highScoreTableBtn, optionsBtn);

    appFooter.append(
        saveGameBtn,
        continueGameBtn,
        resetGameBtn,
        showSolutionBtn,
    );

    innerWapper.append(horizontalCluesRow, gameField);

    infoBox = createElement('p', null, ['info-box'], gameName[0]);

    main.append(appHeader, infoBox, timeInfo, gameFieldWrapper, appFooter);

    body.append(main);
    gameField.addEventListener('click', gameFieldClickHandler);

    gameField.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('cell')) {
            crossCell(e.target);
        }
    });
}
