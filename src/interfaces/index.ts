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

export interface NewsParams {
    page?: number;
    pageSize?: number;
    category?: string | null;
    keywords?: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface CategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export interface IPaginationProps {
    totalPages: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handlePageClick: (page: number) => void;
    currentPage: number;
}

export interface IFilters {
    page: number;
    pageSize: number;
    category: CategoriesType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type CategoriesType =
    | "general"
    | "world"
    | "nation"
    | "business"
    | "technology"
    | "entertainment"
    | "sports"
    | "science"
    | "health";
