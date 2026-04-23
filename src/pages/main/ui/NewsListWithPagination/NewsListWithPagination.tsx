import { NewsList } from "@/widgets/news";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import styles from "./NewsListWithPagination.module.scss";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
    filters: IFilters;
    articles: INews[];
    isLoading: boolean;
    shouldSkip: boolean;
}

const NewsListWithPagination = ({
    filters,
    articles,
    isLoading,
    shouldSkip,
}: Props) => {
    const { handleNextPage, handlePreviousPage, handlePageClick } =
        usePaginationNews(filters);

    return (
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
                <NewsList
                    type="item"
                    direction="column"
                    isLoading={isLoading}
                    news={articles ?? []}
                />
            )}
        </Pagination>
    );
};

export default NewsListWithPagination;
