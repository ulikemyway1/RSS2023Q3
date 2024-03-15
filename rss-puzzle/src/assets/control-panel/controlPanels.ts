import gameBoard from '../game-board/gameBoard';
import BaseElement from '../utils/BaseElement';
import ImageElement from '../utils/ImageElement';
import './controlPanel.scss';

export default class ControlPanel {
    private controlPanel: HTMLElement;

    private options: HTMLElement[] = [];

    constructor() {
        this.controlPanel = new BaseElement('div', undefined, [
            'control-panel',
        ]).getElement();
        this.options.push(
            this.createTranslationOption(),
            this.createPronuncuationOption()
        );

        this.controlPanel.append(...this.options);
    }

    getElement() {
        return this.controlPanel;
    }

    private createTranslationOption() {
        const translationOptionBtn = new BaseElement('div', undefined, [
            'control-panel__item',
            'control-panel__translation',
        ]).getElement();

        const icon = new ImageElement(
            'assets/img/translation-icon.svg',
            ['control-panel__translation-icon'],
            'Translation'
        ).getElement();

        translationOptionBtn.append(icon);

        const { translateBox } = gameBoard;

        const translateBoxView = translateBox.getView();

        translationOptionBtn.addEventListener('click', () => {
            if (translateBox.getStatus()) {
                translateBoxView.classList.remove('active');
                translationOptionBtn.classList.remove('on');
            } else {
                translateBoxView.classList.add('active');
                translationOptionBtn.classList.add('on');
            }

            translateBox.toggleStatus();
        });

        return translationOptionBtn;
    }

    private createPronuncuationOption() {
        const pronuncuationOptionBtn = new BaseElement('div', undefined, [
            'control-panel__item',
            'control-panel__pronuncuation',
        ]).getElement();

        const icon = new ImageElement(
            'assets/img/pronunciation-option.svg',
            ['control-panel__pronuncuation-icon'],
            'Pronuncuation'
        ).getElement();

        pronuncuationOptionBtn.append(icon);

        const pronuncuationHintBtn = gameBoard.audioHintBtn;
        const pronunciationHint = gameBoard.audioHint;

        pronuncuationOptionBtn.addEventListener('click', () => {
            if (pronunciationHint.getStatus()) {
                pronuncuationHintBtn.classList.remove('active');
            } else {
                pronuncuationHintBtn.classList.add('active');
            }

            pronunciationHint.toggleStatus();
        });

        return pronuncuationOptionBtn;
    }
}
