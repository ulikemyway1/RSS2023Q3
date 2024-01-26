import { createElement } from './createElement.js';

export function renderMainApp() {
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

    const gameField = createElement('section', null, ['app__game-field']);

    appHeader.append(changeThemeBtn, timeInfo, optionsBtn);

    appFooter.append(saveGameBtn, restartGameBtn, showSolutionBtn);

    main.append(appHeader, gameField, appFooter);

    body.append(main);
}
