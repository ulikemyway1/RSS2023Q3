import Header from '../header/header';
import BaseElement from '../utils/BaseElement';
import ParagraphElement from '../utils/ParagraphElement';
import './startScreen.scss';

export type UserInfo = {
    firstName: string;
    lastName: string;
};

export default class StartScreen {
    private content: HTMLElement | null;

    private userInfo;

    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
        this.content = this.init();
    }

    private init() {
        const wrapper = new BaseElement('div', undefined, [
            'start-screen__wrapper',
        ]).getElement();
        const startScreen = new BaseElement('main', 'main', [
            'start-screen',
        ]).getElement();
        const gameTitle = new BaseElement(
            'h1',
            undefined,
            ['start-screen__game-title'],
            'RSS Puzzle'
        ).getElement();
        const gameDescrtxt = `Learn English in a playful way. Discover the world's masterpieces by collecting sentences like puzzles.`;
        const gameDescr = new ParagraphElement(gameDescrtxt, undefined, [
            'start-screen__game-descr',
        ]).getElement();
        const userGreeting = new ParagraphElement(
            `Welcome, ${this.userInfo.firstName} ${this.userInfo.lastName}!`,
            undefined,
            ['start-screen__greeting']
        ).getElement();

        const header = new Header().getElement();
        if (header) document.body.append(header);
        wrapper.append(gameTitle, userGreeting, gameDescr);
        startScreen.append(wrapper);
        return startScreen;
    }

    getContent() {
        return this.content;
    }
}
