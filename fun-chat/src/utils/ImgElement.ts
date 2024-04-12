export default class ImgElement {
    private img: HTMLImageElement;
    constructor(src: string, alt: string, classList?: string[]) {
        this.img = document.createElement('img');
        this.img.src = src;
        this.img.alt = alt;
        if (classList) {
            this.img.classList.add(...classList);
        }
    }

    public getImg() {
        return this.img;
    }
}
