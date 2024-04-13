export default class AnchorElement {
    private a = document.createElement('a');

    constructor(
        href: string,
        textContent: string,
        classList: string[],
        target: '_blank' | '_self' = '_blank'
    ) {
        this.a.href = href;
        this.a.classList.add(...classList);
        this.a.target = target;
        this.a.textContent = textContent;
    }

    public getAnchor(): HTMLAnchorElement {
        return this.a;
    }
}
