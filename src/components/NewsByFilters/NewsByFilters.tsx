import {  TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFIlters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./NewsByFilters.module.scss";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
    const handleNextPage = () => {
        if (filters.page < TOTAL_PAGES) {
            changeFilter("page", filters.page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (filters.page > 1) {
            changeFilter("page", filters.page - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        changeFilter("page", pageNumber);
    };
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter}/>

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page}
            />

            <NewsList isLoading={isLoading} news={news} />

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page}
            />
        </section>
    );
};

export default NewsByFilters;
