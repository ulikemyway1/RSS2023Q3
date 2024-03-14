import BaseElement from '../utils/BaseElement';

export default class PuzzlePiece extends BaseElement {
    #order: number;

    constructor(innerText: string, order: number) {
        super('span', undefined, ['puzzle-piece'], innerText);
        this.#order = order;
    }

    public getOrder() {
        return this.#order;
    }

    public addEventListener(event: string, callback: () => void) {
        this.getElement().addEventListener(event, callback);
    }
}
