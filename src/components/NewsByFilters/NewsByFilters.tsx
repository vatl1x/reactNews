import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../components/hooks/useDebounce";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./NewsByFilters.module.scss";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

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

            <PaginationWrapper
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
                    <NewsList
                        isLoading={isLoading}
                        news={articles ?? []}
                    />
                )}
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
