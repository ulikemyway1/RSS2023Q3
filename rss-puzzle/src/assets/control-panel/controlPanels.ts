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
        this.options.push(this.createTranslationOption());

        this.controlPanel.append(...this.options);
    }

    getElement() {
        return this.controlPanel;
    }

    private createTranslationOption() {
        const translation = new BaseElement('div', undefined, [
            'control-panel__item',
            'control-panel__translation',
        ]).getElement();
        const icon = new ImageElement(
            'assets/img/translation-icon.svg',
            ['control-panel__translation-icon'],
            'Translation'
        ).getElement();
        translation.append(icon);

        return translation;
    }
}
