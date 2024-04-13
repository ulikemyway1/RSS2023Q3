import AnchorElement from '../../utils/AnchorElement';
import BaseElement from '../../utils/BaseElement';
import ImgElement from '../../utils/ImgElement';
import './footer.scss';
export default class Footer {
    private footer = new BaseElement('footer', ['footer']).getElement();

    constructor() {
        const rssLink = new AnchorElement('https://rs.school/', '', [
            'footer__link',
            'link',
        ]).getAnchor();
        const rss = new BaseElement(
            'div',
            [],
            'Rolling Scopes School'
        ).getElement();
        const rssIcon = require('../../icons/logo-rsschool3.png') as string;
        const rssLogo = new ImgElement(rssIcon, 'Rolling Scopes School', [
            'footer__icon',
        ]).getImg();
        rssLink.append(rssLogo, rss);
        const githubIcon = require('../../icons/github-mark.svg') as string;
        const githubLogo = new ImgElement(githubIcon, 'GitHub', [
            'footer__icon',
            'float-right',
        ]).getImg();
        const year = new BaseElement(
            'div',
            ['footer__year'],
            '2024'
        ).getElement();
        const gitHubLink = new AnchorElement(
            'https://github.com/ulikemyway1',
            '',
            ['footer__link', 'link']
        ).getAnchor();
        const author = new BaseElement('div', [], 'ulikemyway1').getElement();
        gitHubLink.append(githubLogo, author);
        this.footer.append(rssLink, year, gitHubLink);
    }

    public getFooter(): HTMLElement {
        return this.footer;
    }
}
