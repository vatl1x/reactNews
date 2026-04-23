import { CategoriesType } from "@/entities/category";

export interface NewsParams {
    page?: number;
    pageSize?: number;
    category?: string | null;
    keywords?: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface IFilters {
    page: number;
    pageSize: number;
    category: CategoriesType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>;
