import { assertIsElement } from '../utils/assertIsElement';
import { ArticlesInfo, NewsSources, sourcesInfo } from '../utils/types';
import News from './news/news';
import Sources from './sources/sources';
import './filter/filter.css';
export class AppView {
    news;
    sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ArticlesInfo) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: NewsSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
        this.showFilter(values);
    }

    public showFilter(data: sourcesInfo) {
        const filter = document.querySelector('.filter');
        const category: {
            [letter: string]: string[];
        } = {
            init: [''],
        };
        delete category['init'];
        assertIsElement<HTMLElement>(filter);
        data.forEach((source) => {
            const letter = source.name[0];
            if (!category[letter]) {
                category[letter] = [];
                category[letter].push(source.id);
            } else {
                category[letter].push(source.id);
            }
        });
        console.log(category);

        const checkBoxes: HTMLInputElement[] = [];
        const selectAllBtn = document.createElement('button');
        selectAllBtn.classList.add('filter__btn', 'select-all');
        selectAllBtn.textContent = 'Select all';
        selectAllBtn.addEventListener('click', () => checkBoxes.forEach((checkBox) => (checkBox.checked = true)));

        const deselectAllBtn = document.createElement('button');
        deselectAllBtn.classList.add('filter__btn', 'deselect-all');
        deselectAllBtn.textContent = 'Deselect all';
        deselectAllBtn.addEventListener('click', () => checkBoxes.forEach((checkBox) => (checkBox.checked = false)));

        filter.append(selectAllBtn, deselectAllBtn);

        for (const key in category) {
            const checkBox = this.createCheckBox(key);
            filter.append(checkBox);
            assertIsElement<HTMLInputElement>(checkBox.firstChild);
            checkBoxes.push(checkBox.firstChild);
        }

        const applyFilterBtn = document.createElement('button');
        applyFilterBtn.classList.add('filter__btn', 'apply-filter');
        applyFilterBtn.textContent = 'Apply';
        filter.append(applyFilterBtn);
    }

    private createCheckBox(key: string): HTMLElement {
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = key;
        checkBox.name = 'sourceFilter';
        const label = document.createElement('label');
        label.htmlFor = key;
        label.textContent = key;
        const element = document.createElement('div');
        element.classList.add('filter__item');
        element.append(checkBox, label);
        return element;
    }
}

export default AppView;
