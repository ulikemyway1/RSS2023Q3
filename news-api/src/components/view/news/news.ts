import './news.css';
import { assertIsElement } from '../../utils/assertIsElement';
import { ArticlesInfo } from '../../utils/types';
interface INews {
    draw(data: ArticlesInfo['articles']): void;
}
class News implements INews {
    public draw(data: ArticlesInfo['articles']) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: Element | null = document.querySelector('#newsItemTemp');
        assertIsElement<HTMLTemplateElement>(newsItemTemp);
        news.forEach((item, idx) => {
            let newsClone;
            if (newsItemTemp) newsClone = newsItemTemp.content.cloneNode(true);
            assertIsElement<HTMLElement>(newsClone);
            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                assertIsElement(newsItem);
                newsItem.classList.add('alt');
            }
            const newsClonePhoto = newsClone.querySelector('.news__meta-photo');
            assertIsElement(newsClonePhoto);
            newsClonePhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const metaAuthor = newsClone.querySelector('.news__meta-author');
            assertIsElement(metaAuthor);
            metaAuthor.textContent = item.author || item.source.name;
            const metaDate = newsClone.querySelector('.news__meta-date');
            assertIsElement(metaDate);
            metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const desciptionTile = newsClone.querySelector('.news__description-title');
            assertIsElement(desciptionTile);
            desciptionTile.textContent = item.title;

            const desciptionSource = newsClone.querySelector('.news__description-source');
            assertIsElement(desciptionSource);
            desciptionSource.textContent = item.source.name;

            const desciptionContent = newsClone.querySelector('.news__description-content');
            assertIsElement(desciptionContent);
            desciptionContent.textContent = item.description;

            const newsReadMoreLink = newsClone.querySelector('.news__read-more a');
            assertIsElement(newsReadMoreLink);
            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsBlock = document.querySelector('.news');
        assertIsElement(newsBlock);
        newsBlock.innerHTML = '';
        newsBlock.appendChild(fragment);
    }
}

export default News;
