export interface CategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

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
