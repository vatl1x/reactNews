//тут из другой апи категории не дергаем
//  поэтому мне кажется сущность категории вообще не нужна или как?

import { NewsApiResponse } from "@/entities/news";
import { setNews } from "@/entities/news/model/newsSlice";
import { ParamsType } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsApiResponse, ParamsType>({
            keepUnusedDataFor: 0,
            query: (params) => {
                const {
                    page = 1,
                    pageSize = 10,
                    category,
                    keywords,
                } = params || {};

                const queryParams: Record<string, string | number> = {
                    token: API_KEY,
                    lang: "ru",
                    page,
                    max: pageSize,
                };

                if (category) {
                    queryParams.category = category;
                }
                if (keywords?.trim()) {
                    queryParams.q = keywords?.trim();
                }
                return {
                    url: "top-headlines",
                    params: queryParams,
                };
            },
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                const data = result.data;

                dispatch(setNews(data.articles));
            },
        }),
    }),
});

export const { useGetNewsQuery } = newsApi;
