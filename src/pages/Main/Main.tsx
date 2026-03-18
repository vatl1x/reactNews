import { getNews } from "../../api/apiNews";
import styles from "./Main.module.scss";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

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

    return (
        <main className={styles.main}>
            <LatestNews isLoading={isLoading} banners={data && data.articles} />
            <NewsByFilters
                news={data?.articles}
                isLoading={isLoading}
                filters={filters}
                changeFilter={changeFilter}
            />
        </main>
    );
};

export default Main;
