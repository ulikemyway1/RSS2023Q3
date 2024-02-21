import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news;
    sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: {
        articles: {
            id: string;
            name: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            author: string;
            publishedAt: string;
            source: { name: string };
        }[];
    }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: {
        sources: {
            id: string;
            name: string;
            desciption: string;
            url: string;
            category: string;
            language: string;
            country: string;
        }[];
    }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
