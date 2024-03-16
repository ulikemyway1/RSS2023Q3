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

    public addListItem(content: string | number, liClassList: string[]) {
        if (this.parent) {
            this.parent.append(this.createListItem(content, liClassList));
        }
    }

    public getList() {
        return this.parent;
    }

    private createListItem(content: string | number, liClassList: string[]) {
        if (typeof content === 'string') {
            const li = document.createElement('li');
            li.textContent = content;
            li.classList.add(...liClassList);
            return li;
        }
        const li = document.createElement('li');
        li.textContent = String(content);
        li.classList.add(...liClassList);
        return li;
    }
}
