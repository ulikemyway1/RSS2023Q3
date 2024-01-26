import { createElement } from './createElement.js';

export function renderMainApp() {
    const body = document.body;

    const main = createElement('main', null, ['app']);

    const appHeader = createElement('section', null, ['app__header']);

    const appFooter = createElement('section', null, ['app__footer']);

    const changeThemeBtn = createElement(
        'button',
        'change-theme-btn',
        null,
        'Change Theme',
    );

    const timeInfo = createElement('div', 'time-info', null, 'Time:');

    const optionsBtn = createElement(
        'button',
        'options-btn',
        null,
        'Game Options',
    );

    const saveGameBtn = createElement(
        'button',
        'save-game-btn',
        null,
        'Save Game',
    );

    const restartGameBtn = createElement(
        'button',
        'restart-game-btn',
        null,
        'Restart Game',
    );

    const showSolutionBtn = createElement(
        'button',
        'show-solution-btn',
        null,
        'Show Solution',
    );

    const gameField = createElement('section', null, ['app__gameField']);

    appHeader.append(changeThemeBtn, timeInfo, optionsBtn);

    appFooter.append(saveGameBtn, restartGameBtn, showSolutionBtn);

    main.append(appHeader, gameField, appFooter);

    body.append(main);
}
