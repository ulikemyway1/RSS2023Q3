export type NewsSources = {
    sources: {
        id: string;
        name: string;
        desciption: string;
        url: string;
        category: string;
        language: string;
        country: string;
    }[];
};
export type sourcesInfo = NewsSources['sources'];
export type ArticlesInfo = {
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
};
