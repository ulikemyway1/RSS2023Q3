import { createElement } from './createElement';
import { DB } from './levels';
import { main } from './renderMainApp';
let window;
export function renderWindowLevels() {
    window = createElement('section', null, ['levels-window']);

    const levelsHeader = createElement(
        'p',
        null,
        ['levels-window__header'],
        'Choose nonogram...',
    );

    const levelsWrapper = createElement('div', null, [
        'levels-window__wrapper',
    ]);

    const closeWindowLevelsBtn = createElement(
        'button',
        null,
        ['button', 'levels-window__button'],
        'Close',
    );
    closeWindowLevelsBtn.addEventListener('click', () => {
        window.classList.add('hidden');
        main.classList.remove('hidden');
    });
    createList(levelsWrapper, DB);
    window.append(levelsHeader, levelsWrapper, closeWindowLevelsBtn);
    document.body.append(window);
    window.classList.add('hidden');
}

export function showGameLevels() {
    main.classList.add('hidden');
    window.classList.remove('hidden');
}

function createList(parent, src) {
    src.forEach((nonogram) => {
        const card = createElement('article', null, ['levels-window__card']);
        const cardDescr = createElement(
            'h2',
            null,
            ['levels-window__card-descr'],
            nonogram.name,
        );
        const cardLevel = createElement(
            'p',
            null,
            ['levels-window__card-level', nonogram.level],
            nonogram.level,
        );
        card.append(cardDescr, cardLevel);
        parent.append(card);
    });
}
