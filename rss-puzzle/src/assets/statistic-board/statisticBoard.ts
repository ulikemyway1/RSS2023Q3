import gameBoard, { IWord } from '../game-board/gameBoard';
import SentencePronunciation from '../game-features/sentencePronunciation';
import BaseElement from '../utils/BaseElement';
import ImageElement from '../utils/ImageElement';
import './statisticBoard.scss';

class StatisticBoard {
    public content = new BaseElement('section', undefined, [
        'statistic-board',
    ]).getElement();

    private title = new BaseElement(
        'h2',
        undefined,
        ['statistic-board__title'],
        'Your round statistic'
    ).getElement();

    private imgWrapper = new BaseElement('div', undefined, [
        'statistic-board__img-wrapper',
    ]).getElement();

    private knownSection = new BaseElement(
        'div',
        undefined,
        ['statistic-board__known-section'],
        'You know...'
    ).getElement();

    private unknownSection = new BaseElement(
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
        this.clearOldContent();
        this.fillContent();
        return this.content;
    }

    public clearOldContent() {
        while (this.imgWrapper.lastElementChild) {
            this.imgWrapper.lastElementChild.remove();
        }

        while (this.knownSection.lastElementChild) {
            this.knownSection.lastElementChild.remove();
        }

        while (this.unknownSection.lastElementChild) {
            this.unknownSection.lastElementChild.remove();
        }
    }

    private fillContent() {
        const { userKnow, userDoesntKnow, imgInfo } =
            gameBoard.statisticObserver.getStatistic();

        const img = new ImageElement(
            `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imgInfo[0].cutSrc}`,
            ['statistic-board__img'],
            'Image'
        ).getElement();
        const imgDescr = new BaseElement(
            'p',
            undefined,
            ['statistic-board__img-descr'],
            `${imgInfo[0].name} by ${imgInfo[0].author} (${imgInfo[0].year})`
        ).getElement();
        this.imgWrapper.append(img, imgDescr);

        if (userDoesntKnow.length === 0) {
            const info = new BaseElement(
                'p',
                undefined,
                ['statistic-board__text-info', 'all-known'],
                'Wow! You have put all the sentences together correctly.'
            ).getElement();
            this.unknownSection.append(info);
        } else {
            userDoesntKnow.forEach((obj) => {
                const card = this.createCard(obj, 'unknown');
                this.unknownSection.append(card);
            });
        }

        if (userKnow.length === 0) {
            const info = new BaseElement(
                'p',
                undefined,
                ['statistic-board__text-info', 'all-unknown'],
                'Oops! You have put all the sentences together incorrectly.'
            ).getElement();
            this.knownSection.append(info);
        } else {
            userKnow.forEach((obj) => {
                const card = this.createCard(obj, 'known');
                this.knownSection.append(card);
            });
        }
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
