import gameBoard, { IWord } from '../game-board/gameBoard';
import SentencePronunciation from '../game-features/sentencePronunciation';
import BaseElement from '../utils/BaseElement';
import './statisticBoard.scss';

class StatisticBoard {
    content = new BaseElement('section', undefined, [
        'statistic-board',
    ]).getElement();

    title = new BaseElement(
        'h2',
        undefined,
        ['statistic-board__title'],
        'Your round statistic'
    ).getElement();

    imgWrapper = new BaseElement('div', undefined, [
        'statistic-board__img-wrapper',
    ]).getElement();

    knownSection = new BaseElement(
        'div',
        undefined,
        ['statistic-board__known-section'],
        'You know...'
    ).getElement();

    unknownSection = new BaseElement(
        'div',
        undefined,
        ['statistic-board__unknown-section'],
        "You don't know..."
    ).getElement();

    constructor() {
        this.content.append(
            this.title,
            this.imgWrapper,
            this.knownSection,
            this.unknownSection
        );
    }

    getContent() {
        this.fillContent();
        return this.content;
    }

    fillContent() {
        const { userKnow, userDoesntKnow } =
            gameBoard.statisticObserver.getStatistic();

        userDoesntKnow.forEach((obj) => {
            const card = this.createCard(obj, 'unknown');
            this.unknownSection.append(card);
        });

        userKnow.forEach((obj) => {
            const card = this.createCard(obj, 'known');
            this.knownSection.append(card);
        });
    }

    private createCard(obj: IWord, type: 'known' | 'unknown') {
        const card = new BaseElement('div', undefined, [
            'statistic-board__card',
        ]).getElement();
        const engSent = new BaseElement(
            'p',
            undefined,
            ['statistic-board__eng-sent'],
            obj.textExample
        ).getElement();
        const rusSent = new BaseElement(
            'p',
            undefined,
            ['statistic-board__rus-sent'],
            obj.textExampleTranslate
        ).getElement();
        const audio = new SentencePronunciation();
        audio.setSource(
            `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${obj.audioExample}`
        );
        audio.getElement().load();

        const audioHintBtn = audio.getElementView();
        audioHintBtn.classList.add('statistic-board__audio-btn');
        audioHintBtn.addEventListener('click', () => {
            audio.playAudio();
            audio
                .getElement()
                .addEventListener('ended', () =>
                    audioHintBtn.classList.remove('speaking')
                );
            audioHintBtn.classList.add('speaking');
        });
        card.append(engSent, rusSent, audio.getElement(), audioHintBtn);
        if (type === 'known') {
            card.classList.add('known-card');
        } else {
            card.classList.add('unknown-card');
        }
        return card;
    }
}

const statBoard = new StatisticBoard();
export default statBoard;
