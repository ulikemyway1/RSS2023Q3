import BaseElement from '../../utils/BaseElement';
import ButtonElement from '../../utils/ButtonElement';
import InputElement from '../../utils/InputElement';
import contactsListController from './ContactsListController';

export default class SearchBox {
    private view = new BaseElement('section', ['search-box']).getElement();
    private searchInput = new InputElement(
        'search',
        'search',
        '',
        ['search-box__input'],
        'Search for contacts...'
    ).getInput();

    constructor() {
        this.searchInput.required = true;
        this.searchInput.size = 5;
        this.searchInput.addEventListener('input', () => {
            const query = this.searchInput.value.trim();
            this.searchContact(query);
        });
        this.view.append(this.searchInput);
    }

    public getView(): HTMLElement {
        return this.view;
    }

    private searchContact(query: string) {
        if (query.length > 0) {
            contactsListController.findContact(query);
        } else {
            contactsListController.cancelFilter();
        }
    }
}
