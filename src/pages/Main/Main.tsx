import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./Main.module.scss";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await getNews();
                setNews(response.articles);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type="banner" count={1} />
            )}

            {!isLoading ? <NewsList news={news} /> : <Skeleton type="item" count={10}/>}
        </div>
    );
};

export default Main;
