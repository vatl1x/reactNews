import axios from "axios";
import type { NewsApiResponse, ParamsType } from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
    params?: ParamsType,
): Promise<NewsApiResponse> => {
    try {
        const { page = 1, pageSize = 10, category, keywords } = params || {};

        const response = await axios.get<NewsApiResponse>(
            `${BASE_URL}top-headlines`,
            {
                params: {
                    token: API_KEY,
                    category,
                    lang: "ru",
                    page,
                    max: pageSize,
                    q: keywords,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return { articles: [], page: 1, status: "error" };
    }
};

//-----    НЕ РЕАЛИЗОВАНА ПОСКОЛЬКУ КАТЕГОРИИ АПИ ДАЕТ КОНСТАНТОЙ, ПОЛУЧИТЬ НЕЙМИНГИ ИХ ЗАПРОСМ НЕЛЬЗЯ
// export const getCategories = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}top-headlines`, {
//             params: {
//                 token: API_KEY,
//                 category: "general",
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
