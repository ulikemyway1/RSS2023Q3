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
import { showGameLevels } from './showGameLevels.js';
import { playRandomGame } from './playRandomGame.js';
import { buttonClickSoundPlay, turnOffSounds, turnOnSounds } from './prepareSounds.js';
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
export let optionsBtn;
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
    changeThemeBtn.addEventListener('click', () => {
        changeTheme();
        buttonClickSoundPlay();
    });

    highScoreTableBtn = createElement(
        'button',
        'high-score-btn',
        ['button']
    );

    highScoreTableBtn.addEventListener('click', () => {
        showScoreTable();
        buttonClickSoundPlay();
    });

    timeInfo = createElement('div', 'time-info', null, 'Time passed: ');
    timer = new Timer(0, timeInfo);
    timer.render();

    optionsBtn = createElement(
        'button',
        'choose-game-btn',
        ['button']
    );

    optionsBtn.addEventListener('click', () => {
        showGameLevels();
        buttonClickSoundPlay();
    });

    saveGameBtn = createElement(
        'button',
        'save-game-btn',
        ['button']
    );

    saveGameBtn.addEventListener('click', () => {
        saveGame();
        buttonClickSoundPlay();
    });

    continueGameBtn = createElement(
        'button',
        'continue-game-btn',
        ['button']
    );

    continueGameBtn.addEventListener('click', () => {
        continueGame();
        buttonClickSoundPlay();
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
        ['button']
    );

    resetGameBtn.addEventListener('click', () => {
        resetGame();
        buttonClickSoundPlay();
    });

    showSolutionBtn = createElement(
        'button',
        'show-solution-btn',
        ['button']
    );

    showSolutionBtn.addEventListener('click', () => {
        showSolution();
        buttonClickSoundPlay();
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
    const rnd = createElement('button', 'random-game-btn', ['button']);
    rnd.addEventListener('click', () => {
        playRandomGame();
        buttonClickSoundPlay();
    })

    const soundControl = createElement('button', 'sound-control-btn', ['button']);
    soundControl.addEventListener('click', () => {
        buttonClickSoundPlay();
        if (!soundControl.classList.contains('sound-off')) {
            turnOffSounds();
        } else {
            turnOnSounds();
        }
        soundControl.classList.toggle('sound-off');
    })
    const headerBtnsWrapper = createElement('div', 'header-btns-wrapper');

    headerBtnsWrapper.append(changeThemeBtn, soundControl, highScoreTableBtn, rnd, optionsBtn);

    appFooter.append(
        saveGameBtn,
        continueGameBtn,
        resetGameBtn,
        showSolutionBtn,
    );

    innerWapper.append(horizontalCluesRow, gameField);

    infoBox = createElement('p', null, ['info-box'], gameName[0]);
    const gameInfoWrapper = createElement('div', 'game-info-wrapper')
    
    gameInfoWrapper.append(infoBox, timeInfo);
    appHeader.append(headerBtnsWrapper, gameInfoWrapper);
    gameFieldWrapper.prepend(gameInfoWrapper);
    main.append(appHeader, gameFieldWrapper, appFooter);

    body.append(main);
    gameField.addEventListener('click', gameFieldClickHandler);

    gameField.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('cell')) {
            crossCell(e.target);
        }
    });
}
