import BaseElement from './BaseElement';
import ImageElement from './ImageElement';

export default class ListElement {
    type: 'ol' | 'ul';

    parent: HTMLOListElement | HTMLUListElement | null = null;

    constructor(type: 'ol' | 'ul', parentClassList: string[]) {
        this.type = type;
        if (type === 'ol') {
            this.parent = document.createElement('ol');
        } else {
            this.parent = document.createElement('ul');
        }
        this.parent.classList.add(...parentClassList);
    }

    public addListItem(
        content: string | number,
        liClassList: string[],
        imgSrc: string
    ) {
        if (this.parent) {
            this.parent.append(
                this.createListItem(content, liClassList, imgSrc)
            );
        }
    }

    public getList() {
        return this.parent;
    }

    private createListItem(
        content: string | number,
        liClassList: string[],
        imgSrc: string
    ) {
        const li = document.createElement('li');
        const imgWrapper = new BaseElement('div', undefined, [
            'list-item__img-wrapper',
        ]).getElement();
        const img = new ImageElement(
            `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imgSrc}`,
            ['levels-list__item-img'],
            typeof content === 'string' ? content : String(content)
        ).getElement();
        img.draggable = false;
        imgWrapper.append(img);
        li.append(imgWrapper);
        li.append(
            new BaseElement(
                'span',
                undefined,
                ['levels-list__item-descr'],
                String(content)
            ).getElement()
        );
        li.classList.add(...liClassList);
        return li;
    }
}
