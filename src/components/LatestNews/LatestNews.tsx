import { getNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BannersList/BannersList";
import styles from "./LatestNews.module.scss";

const LatestNews = () => {
    const { data, isLoading } = useFetch(getNews, {
        category: "general",
    });
    return (
        <section className={styles.section}>
            <BannersList
                banners={data && data.articles}
                isLoading={isLoading}
            />
        </section>
    );
};

export default LatestNews;
