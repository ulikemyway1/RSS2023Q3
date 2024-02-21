import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(
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

    getNews(
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
        let target = e.target! as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
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
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
