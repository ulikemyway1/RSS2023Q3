import BaseElement from '../utils/BaseElement';

export default class PuzzlePiece extends BaseElement {
    #order: number;

    constructor(innerText: string, order: number) {
        super('div', undefined, ['puzzle-piece']);
        this.#order = order;
        const textBlock = document.createElement('span');
        textBlock.classList.add('puzzle-text');
        textBlock.textContent = innerText;
        this.element.append(textBlock);
    }

    public getOrder() {
        return this.#order;
    }

    public addEventListener(event: string, callback: () => void) {
        this.getElement().addEventListener(event, callback);
    }
}
