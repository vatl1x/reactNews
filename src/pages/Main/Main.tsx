import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./Main.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { CATEGORIES, PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
    const { filters, changeFilter } = useFilters({
        page: 1,
        pageSize: PAGE_SIZE,
        category: null,
        keywords: "",
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

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
        <div className={styles.main}>
            <Categories
                categories={CATEGORIES}
                selectedCategory={filters.category}
                setSelectedCategory={(category) =>
                    changeFilter("category", category)
                }
            />

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter("keywords", keywords)}
            />

            <NewsBanner
                isLoading={isLoading}
                item={data && data.articles && data.articles[0]}
            />

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page}
            />

            <NewsList isLoading={isLoading} news={data?.articles} />

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page}
            />
        </div>
    );
};

export default Main;
