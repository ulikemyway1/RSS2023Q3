import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(
        callback: (data: {
            sources: {
                id: string;
                name: string;
                desciption: string;
                url: string;
                category: string;
                language: string;
                country: string;
            }[];
        }) => void
    ) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback as () => void
        );
    }

    public getNews(
        e: Event,
        callback: (data: {
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
        }) => void
    ) {
        let target: HTMLElement | null;
        if (e.target instanceof HTMLElement && e.currentTarget instanceof HTMLElement) {
            target = e.target;
            const newsContainer: HTMLElement | null = e.currentTarget;
            while (target && target !== newsContainer) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id')!;
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback as () => void
                        );
                    }
                    return;
                }
                if (target.parentNode instanceof HTMLElement) target = target.parentNode;
            }
        }
    }
}

export default AppController;
