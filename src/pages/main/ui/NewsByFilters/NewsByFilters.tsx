import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./NewsByFilters.module.scss";
import { NewsFilters } from "@/widgets/news";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
    const filters = useAppSelector((state) => state.news.filters);
    const articles = useAppSelector((state) => state.news.news);

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const shouldSkip = !filters.category && !debouncedKeywords.trim();

    const { isLoading } = useGetNewsQuery(
        {
            ...filters,
            keywords: debouncedKeywords,
        },
        { skip: shouldSkip },
    );

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />

            <NewsListWithPagination
                filters={filters}
                articles={articles}
                isLoading={isLoading}
                shouldSkip={shouldSkip}
            />
        </section>
    );
};

export default NewsByFilters;
