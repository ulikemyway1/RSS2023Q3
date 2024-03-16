import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import levelDescr from './levelDescr';
import LevelRoundList from './levelRoundList';
import './levelsBoard.scss';

export default class LevelsBoard {
    content: HTMLElement = new BaseElement('section', undefined, [
        'levels-board',
    ]).getElement();

    constructor() {
        this.appendContent();
    }

    private async appendContent() {
        const content: HTMLElement[] = [];
        const title = new BaseElement(
            'h2',
            undefined,
            ['levels-board__title'],
            'Pick level and round'
        ).getElement();
        const levelSelectButtonsWrapper = new BaseElement('div', undefined, [
            'levels-board__btn-wrapper',
        ]).getElement();
        const roundListWrapper = new BaseElement('section', undefined, [
            'levels-board__list-wrapper',
        ]).getElement();

        const levelDescrKeys = Object.keys(levelDescr);
        levelDescrKeys.forEach((key) => {
            const level = levelDescr[key];
            const levelButton = new InputElement(
                'button',
                `${level.name} \n (${level.difficulty})`,
                undefined,
                undefined,
                ['levels-board-level-btn', level.classDescr]
            ).getElement();

            levelButton.addEventListener('click', async () => {
                const list = await new LevelRoundList(level.dataURL).getList();
                if (list) {
                    if (
                        roundListWrapper.lastElementChild &&
                        roundListWrapper.lastElementChild.classList.contains(
                            'levels-board__level-list'
                        )
                    ) {
                        roundListWrapper.lastElementChild.remove();
                    }
                    roundListWrapper.append(list);
                }
            });

            levelSelectButtonsWrapper.append(levelButton);
        });

        const closeBtn = new InputElement(
            'button',
            undefined,
            undefined,
            undefined,
            ['levels-board__close-btn']
        ).getElement();
        closeBtn.addEventListener('click', () =>
            this.content.classList.add('hidden')
        );

        content.push(
            closeBtn,
            title,
            levelSelectButtonsWrapper,
            roundListWrapper
        );
        this.content.append(...content);
    }

    public getContent() {
        return this.content;
    }
}
