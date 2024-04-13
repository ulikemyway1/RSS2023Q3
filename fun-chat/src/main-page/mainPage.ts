import chatView from '../chat/chatView';
import BaseElement from '../utils/BaseElement';
import Footer from './footer/footer';
import Header from './header/header';
import './mainPage.scss';

class MainPage {
    private mainPage = new BaseElement('section', ['main-page']).getElement();
    constructor() {
        this.mainPage.append(
            new Header().getHeader(),
            chatView.getChatView(),
            new Footer().getFooter()
        );
    }

    public getMainPage() {
        return this.mainPage;
    }
}

const mainPage = new MainPage();
export default mainPage;
