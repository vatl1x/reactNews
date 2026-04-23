import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./NewsByFilters.module.scss";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";

const NewsByFilters = () => {
    const dispatch = useAppDispatch();

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

    const handleNextPage = () => {
        if (filters.page < TOTAL_PAGES) {
            dispatch(setFilters({ key: "page", value: filters.page + 1 }));
        }
    };

    const handlePreviousPage = () => {
        if (filters.page > 1) {
            dispatch(setFilters({ key: "page", value: filters.page - 1 }));
        }
    };

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({ key: "page", value: pageNumber }));
    };
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />

            <Pagination
                top
                bottom
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page}
            >
                {shouldSkip ? (
                    <p className={styles.message}>Выберите фильтр</p>
                ) : (
                    <NewsList isLoading={isLoading} news={articles ?? []} />
                )}
            </Pagination>
        </section>
    );
};

export default NewsByFilters;
