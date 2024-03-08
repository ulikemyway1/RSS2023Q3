import BaseElement from './BaseElement';

export default class ParagraphElement extends BaseElement {
    constructor(textContent: string, id?: string, classNames?: string[]) {
        super('p', id, classNames, textContent);
    }
}
