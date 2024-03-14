import BaseElement from '../utils/BaseElement';

export default class TranslateBox extends BaseElement {
    wrapper: HTMLElement = new BaseElement('div', undefined, [
        'game-board__translate-box',
    ]).getElement();

    constructor() {
        super('p', undefined, ['game-board__translate-text']);
    }

    getView() {
        this.wrapper.append(this.element);
        return this.wrapper;
    }

    setText(sentence: string) {
        this.element.textContent = sentence;
    }
}
