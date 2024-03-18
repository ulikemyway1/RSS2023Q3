import gameProgressObserver from '../levels-board/gameProgress';
import BaseElement from './BaseElement';
import ImageElement from './ImageElement';

export default class ListElement {
    type: 'ol' | 'ul';

    parent: HTMLOListElement | HTMLUListElement | null = null;

    levelNumber: string;

    constructor(
        type: 'ol' | 'ul',
        parentClassList: string[],
        levelNumber: string
    ) {
        this.type = type;
        if (type === 'ol') {
            this.parent = document.createElement('ol');
        } else {
            this.parent = document.createElement('ul');
        }
        this.parent.classList.add(...parentClassList);

        this.levelNumber = levelNumber;
    }

    public addListItem(
        content: string | number,
        liClassList: string[],
        imgSrc: string,
        index: number
    ) {
        if (this.parent) {
            this.parent.append(
                this.createListItem(content, liClassList, imgSrc, index)
            );
        }
    }

    public getList() {
        if (this.parent) this.parent.dataset.level = this.levelNumber;
        return this.parent;
    }

    private createListItem(
        content: string | number,
        liClassList: string[],
        imgSrc: string,
        index: number
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
        li.dataset.index = String(index);
        li.dataset.level = this.levelNumber;
        if (this.isCompleted(li)) {
            li.classList.add('complited');
        }
        return li;
    }

    private isCompleted(li: HTMLElement): boolean {
        const ID = `${li.dataset.level}-${li.dataset.index}`;
        if (gameProgressObserver.isCompletedRound(ID)) {
            return true;
        }
        return false;
    }

    static getActualCompletedStatus(li: HTMLElement) {
        const ID = `${li.dataset.level}-${li.dataset.index}`;
        if (gameProgressObserver.isCompletedRound(ID)) {
            li.classList.add('complited');
        } else {
            li.classList.remove('complited');
        }
    }
}
