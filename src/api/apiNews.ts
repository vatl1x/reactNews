import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page = 1, pageSize = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}top-headlines`, {
            params: {
                token: API_KEY,
                category: "general",
                lang: "ru",
                page,
                max: pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
