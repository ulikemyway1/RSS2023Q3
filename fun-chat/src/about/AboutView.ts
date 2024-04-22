import './about.scss';
import BaseElement from '../utils/BaseElement';
import ImgElement from '../utils/ImgElement';
import Footer from '../main-page/footer/footer';
import ButtonElement from '../utils/ButtonElement';
import app from '../app/app';
const funChatImg = require('../about/fun-chat-min.png');
export default class AboutPageView {
    private view = new BaseElement('section', ['about']).getElement();
    private mainContent = new BaseElement('main', [
        'about__main-content',
    ]).getElement();
    private title = new BaseElement(
        'h1',
        ['about__title'],
        'The Fun-chat'
    ).getElement();
    private description = new BaseElement(
        'p',
        ['about__descr'],
        `Fun-chat is an engaging and interactive online chat application that brings people together from all walks of life. It offers a platform for users to connect, communicate, and share their thoughts in a fun and secure environment. With its user-friendly interface and a wide range of features, Fun-chat ensures a seamless and enjoyable chatting experience. Whether it’s a casual conversation or a deep discussion, Fun-chat has got you covered. It’s not just a chat app, it’s a community where everyone can express themselves freely.`
    ).getElement();
    private header = new BaseElement('header', ['about__header']).getElement();
    private backBtn = new ButtonElement(
        '',
        ['about__back-btn'],
        false
    ).getButton();
    private imgAbout = new ImgElement(funChatImg, 'Fun-chat-app', [
        'about__img',
    ]).getImg();
    constructor() {
        this.header.append(this.backBtn);
        this.mainContent.append(this.title, this.description, this.imgAbout);
        this.view.append(
            this.header,
            this.mainContent,
            new Footer().getFooter()
        );
        this.backBtn.addEventListener('click', () => {
            if (app.getState().getItem('userName')) {
                app.getRouter().navigate('main');
            } else {
                app.getRouter().navigate('login');
            }
        });
    }

    public getView(): HTMLElement {
        return this.view;
    }
}
