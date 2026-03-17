import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./Main.module.scss";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const CATEGORIES = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
];
const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            const response = await getNews({
                page: currentPage,
                pageSize,
                category: selectedCategory === "All" ? null : selectedCategory,
            });
            setNews(response.articles);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    // const fetchCategories = async () => {
    //     try {
    //         const response = await getCategories();
    //         setCategories(["All", ...CATEGORIES]);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
    // console.log(categories);

    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    useEffect(() => {
        setIsLoading(true);

        fetchNews(currentPage);
    }, [currentPage, selectedCategory]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.main}>
            <Categories
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type="banner" count={1} />
            )}

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />

            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type="item" count={10} />
            )}

            <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Main;
