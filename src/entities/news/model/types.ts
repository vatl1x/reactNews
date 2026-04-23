export interface INews {
    id: string;
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    lang: string;
    source: {
        id: string;
        name: string;
        url: string;
    };
}

export interface NewsApiResponse {
    articles: INews[];
    page: number;
    status: string;
}