import gameBoard from '../game-board/gameBoard';
import BaseElement from '../utils/BaseElement';
import ImageElement from '../utils/ImageElement';
import './controlPanel.scss';

type UserSettings = {
    translation: boolean;
    audioHint: boolean;
    bgHint: boolean;
};

export default class ControlPanel {
    private controlPanel: HTMLElement;

    private options: HTMLElement[] = [];

    private userSettings: UserSettings;

    constructor() {
        this.userSettings = this.loadUserSettings();
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
            this.userSettings.translation ? 'on' : undefined,
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
            ControlPanel.saveUserSettings();
        });

        return translationOptionBtn;
    }

    private createPronuncuationOption() {
        const pronuncuationOptionBtn = new BaseElement('div', undefined, [
            'control-panel__item',
            'control-panel__pronuncuation',
            this.userSettings.audioHint ? 'on' : undefined,
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
                pronuncuationOptionBtn.classList.remove('on');
            } else {
                pronuncuationHintBtn.classList.add('active');
                pronuncuationOptionBtn.classList.add('on');
            }

            pronunciationHint.toggleStatus();
            ControlPanel.saveUserSettings();
        });

        return pronuncuationOptionBtn;
    }

    private loadUserSettings() {
        const savedUserSettings = localStorage.getItem('settings__ULIKE');
        let userSettings: UserSettings;
        if (savedUserSettings) {
            userSettings = JSON.parse(savedUserSettings);
        } else {
            userSettings = {
                translation: true,
                audioHint: true,
                bgHint: true,
            };
        }
        return userSettings;
    }

    static saveUserSettings(option?: 'default') {
        let userSettings: UserSettings;
        if (!option) {
            userSettings = {
                translation: gameBoard.translateBox.getStatus(),
                audioHint: gameBoard.audioHint.getStatus(),
                bgHint: true,
            };
        } else {
            userSettings = {
                translation: true,
                audioHint: true,
                bgHint: true,
            };
        }
        localStorage.setItem('settings__ULIKE', JSON.stringify(userSettings));
    }

    static getSavedSettings(
        prop: 'translation' | 'audioHint' | 'bgHint'
    ): boolean {
        const savedUserSettings = localStorage.getItem('settings__ULIKE');
        let value: boolean;
        if (savedUserSettings) {
            const settingsObj: UserSettings = JSON.parse(savedUserSettings);
            value = settingsObj[prop];
            console.log(settingsObj);
        } else {
            value = true;
        }
        return value;
    }
}
