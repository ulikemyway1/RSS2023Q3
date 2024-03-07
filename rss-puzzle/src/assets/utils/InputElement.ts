import BaseElement from "./baseElement"


export default class InputElement extends BaseElement {
    private type: string

    private palceholder: string | undefined

    constructor(
        type: string,
        placeholder?: string,
        id?: string,
        classNames?: string[]
    ) {
        super('input', id, classNames)
        this.type = type
        this.palceholder = placeholder
        this.element = this.createInput()
    }

    createInput() {
        this.element.setAttribute('type', this.type)
        if (this.palceholder)
            this.element.setAttribute('placeholder', this.palceholder)
        return this.element
    }

    getElement() {
        return this.element
    }
}
