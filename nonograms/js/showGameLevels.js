import { createElement } from './createElement';
import { DB } from './levels';
import { playChoosenGame } from './playChoosenGame';
import { main } from './renderMainApp';
export let levelsWindow;
export function renderWindowLevels() {
    levelsWindow = createElement('section', null, ['levels-window']);

    const levelsHeader = createElement(
        'p',
        null,
        ['levels-window__header'],
        'Choose nonogram...',
    );

    const levelsWrapper = createElement('div', null, [
        'levels-window__wrapper',
    ]);
    levelsWrapper.addEventListener('click', (e) => {
        if (!e.target.classList.contains('levels-window__wrapper')) {
            if (e.target.classList.contains('levels-window__card')) {
                playChoosenGame(e.target.getAttribute('data-index'));
            } else {
                playChoosenGame(+e.target.closest('.levels-window__card').getAttribute('data-index'));
            }
        }
    });

    const closeWindowLevelsBtn = createElement(
        'button',
        null,
        ['button', 'levels-window__button'],
        'Close',
    );
    closeWindowLevelsBtn.addEventListener('click', () => {
        levelsWindow.classList.add('hidden');
        main.classList.remove('hidden');
    });
    createList(levelsWrapper, DB);
    levelsWindow.append(levelsHeader, levelsWrapper, closeWindowLevelsBtn);
    document.body.append(levelsWindow);
    levelsWindow.classList.add('hidden');
}

export function showGameLevels() {
    main.classList.add('hidden');
    levelsWindow.classList.remove('hidden');
}

function createList(parent, src) {
    src.forEach((nonogram, index) => {
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
        card.setAttribute('data-index', index);
        card.append(cardDescr, cardLevel);
        parent.append(card);
    });
}
