import BaseElement from '../utils/BaseElement';

import './gameFeatures.scss';

export default class TranslateBox extends BaseElement {
    wrapper: HTMLElement = new BaseElement('div', undefined, [
        'translate-box',
    ]).getElement();

    constructor() {
        super('p', undefined, ['translate-box__text']);
    }

    getView() {
        this.wrapper.append(this.element);
        return this.wrapper;
    }

    setText(sentence: string) {
        this.element.textContent = sentence;
    }
}
