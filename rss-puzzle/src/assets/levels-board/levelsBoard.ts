import gameBoard from '../game-board/gameBoard';
import BaseElement from '../utils/BaseElement';
import InputElement from '../utils/InputElement';
import levelDescr from './levelDescr';
import LevelRoundList from './levelRoundList';
import './levelsBoard.scss';
import levelsHashDB from './levelsHashDB';
import Levels from './levelsSrc';

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

        levelSelectButtonsWrapper.addEventListener('click', async (event) => {
            const btn = event.target;
            if (
                btn &&
                btn instanceof HTMLElement &&
                btn.classList.contains('levels-board__level-btn')
            ) {
                if (!btn.classList.contains('selected')) {
                    levelSelectButtonsWrapper.childNodes.forEach((btn) => {
                        if (
                            btn instanceof HTMLElement &&
                            btn.classList.contains('levels-board__level-btn')
                        ) {
                            btn.classList.remove('selected');
                        }
                    });
                    btn.classList.add('selected');

                    const src = LevelsBoard.getLevelByButtonID(btn.id);

                    if (!levelsHashDB.has(src)) {
                        const list = await new LevelRoundList(
                            LevelsBoard.getLevelByButtonID(btn.id),
                            btn.id
                        ).getList();
                        if (list) {
                            levelsHashDB.set(src, list);
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
                    } else {
                        const list = levelsHashDB.get(src);

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
                    }
                }
            }
        });

        roundListWrapper.addEventListener('click', (event) => {
            const targetElement = event.target;
            if (targetElement && targetElement instanceof HTMLElement) {
                const roundCard = targetElement.closest('.levels-list__item');
                if (
                    roundCard &&
                    roundCard instanceof HTMLElement &&
                    roundCard.dataset.index
                ) {
                    const roundNumber = roundCard.dataset.index;
                    if (roundNumber && roundCard.parentElement) {
                        const levelNumber =
                            roundCard.parentElement.dataset.level;
                        gameBoard.loadChosenRound(
                            Number(levelNumber),
                            Number(roundNumber)
                        );
                        gameBoard.roundDescr.element.textContent = `Difficulty level: ${levelNumber}`;
                        gameBoard.roundDescr.element.id = `level-${levelNumber}`;
                        this.getContent().classList.add('hidden');
                        if (gameBoard.controlPanel)
                            gameBoard.controlPanel.classList.remove('hidden');
                        gameBoard.gameBoardWrapper.classList.remove('hidden');
                    }
                }
            }
        });

        const levelDescrKeys = Object.keys(levelDescr);
        levelDescrKeys.forEach((key) => {
            const level = levelDescr[key];
            const levelButton = new BaseElement(
                'button',
                level.levelID,
                ['levels-board__level-btn'],
                `${level.name} \n
                 (${level.difficulty})`
            ).getElement();
            levelSelectButtonsWrapper.append(levelButton);
        });

        const closeBtn = new InputElement(
            'button',
            undefined,
            undefined,
            undefined,
            ['levels-board__close-btn']
        ).getElement();
        closeBtn.addEventListener('click', () => {
            if (gameBoard.controlPanel)
                gameBoard.controlPanel.classList.remove('hidden');
            gameBoard.gameBoardWrapper.classList.remove('hidden');
            this.content.classList.add('hidden');
        });

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

    static getLevelByButtonID(id: string) {
        switch (id) {
            case 'Level-1':
                return Levels['Level-1'];
            case 'Level-2':
                return Levels['Level-2'];
            case 'Level-3':
                return Levels['Level-3'];
            case 'Level-4':
                return Levels['Level-4'];
            case 'Level-5':
                return Levels['Level-5'];
            case 'Level-6':
                return Levels['Level-6'];

            default:
                break;
        }
        return Levels['Level-1'];
    }
}
