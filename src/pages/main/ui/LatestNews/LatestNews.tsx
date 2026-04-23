import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./LatestNews.module.scss";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
    const { data, isLoading } = useGetNewsQuery({
        category: "general",
    });
    return (
        <section className={styles.section}>
            <NewsList
                type="banner"
                direction="row"
                news={data && data.articles}
                isLoading={isLoading}
            />
        </section>
    );
};

export default LatestNews;
