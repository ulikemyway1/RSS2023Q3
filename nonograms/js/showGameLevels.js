import { createElement } from './createElement';
import { DB } from './levels';
import { main, optionsBtn } from './renderMainApp';

export function showGameLevels() {
    optionsBtn.disabled = true;

    const window = createElement('section', null, ['levels-window']);

    const levelsHeader = createElement(
        'p',
        null,
        ['levels-window__header'],
        'Choose nonogram...',
    );

    const levelsWrapper = createElement('div', null, [
        'levels-window__wrapper',
    ]);
    createList(levelsWrapper, DB);
    window.append(levelsHeader, levelsWrapper);
    main.append(window);
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
