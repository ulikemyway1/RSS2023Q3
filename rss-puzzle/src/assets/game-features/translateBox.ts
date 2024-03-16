import BaseElement from '../utils/BaseElement';

import './gameFeatures.scss';

export default class TranslateBox extends BaseElement {
    private isActivated: boolean = true;

    wrapper: HTMLElement = new BaseElement('div', undefined, [
        'translate-box',
        'active',
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

    isVisible(status: boolean) {
        if (status) {
            this.getView().classList.add('active');
        } else {
            this.getView().classList.remove('active');
        }
    }

    toggleStatus() {
        if (this.isActivated) {
            this.isActivated = false;
        } else {
            this.isActivated = true;
        }
    }

    getStatus() {
        return this.isActivated;
    }
}
