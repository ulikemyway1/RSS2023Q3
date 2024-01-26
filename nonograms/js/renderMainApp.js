import { createElement } from './createElement.js';
export const gameField = createElement('section', null, ['app__game-field']);
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

    const timeInfo = createElement('div', 'time-info', null, 'Time:');

    const optionsBtn = createElement(
        'button',
        'options-btn',
        ['button'],
        'Game Options',
    );

    const saveGameBtn = createElement(
        'button',
        'save-game-btn',
        ['button'],
        'Save Game',
    );

    const restartGameBtn = createElement(
        'button',
        'restart-game-btn',
        ['button'],
        'Restart Game',
    );

    const showSolutionBtn = createElement(
        'button',
        'show-solution-btn',
        ['button'],
        'Show Solution',
    );

    const horizontalCluesRow = createElement('div', 'horizontal-clues', [
        'clues-row',
        'clues-row_horizontal',
    ]);

    const verticalCluesRow = createElement('div', 'vertical-clues', [
        'clues-row',
        'clues-row_vertical',
    ]);

    arr.forEach((item, index) =>
        horizontalCluesRow.append(
            createElement('div', `horClue-${index + 1}`, [
                'cell',
                'clues-row-hor',
            ]),
        ),
    );
    verticalCluesRow.append(
        createElement('div', 'free-space-between-row-clues', ['cell']),
    );
    arr.forEach((item, index) =>
        verticalCluesRow.append(
            createElement('div', `vertClue-${index + 1}`, [
                'cell',
                'clues-row-vert',
            ]),
        ),
    );

    const innerWapper = createElement('div', 'inner-wrapper');

    const gameFieldWrapper = createElement('div', 'game-field-wapper');

    gameFieldWrapper.append(verticalCluesRow, innerWapper);

    appHeader.append(changeThemeBtn, timeInfo, optionsBtn);

    appFooter.append(saveGameBtn, restartGameBtn, showSolutionBtn);

    innerWapper.append(horizontalCluesRow, gameField);

    main.append(appHeader, gameFieldWrapper, appFooter);

    body.append(main);
}
