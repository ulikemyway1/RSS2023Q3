import app from '../app/app';
import ButtonElement from '../utils/ButtonElement';

export default class AboutBtn {
    private button = new ButtonElement(
        'About',
        ['button', 'about-btn'],
        false
    ).getButton();

    constructor() {
        this.button.addEventListener('click', () => {
            app.getRouter().navigate('about');
        });
    }

    public getButton(): HTMLElement {
        return this.button;
    }
}
