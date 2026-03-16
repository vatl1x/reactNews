import { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import styles from "./Main.module.scss";
import { getNews } from "../../../api/apiNews";
import NewsList from "../../NewsList/NewsList";
const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNews();
                setNews(response.articles);
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

            <NewsList news={news}/>
        </div>
    );
};

export default Main;
