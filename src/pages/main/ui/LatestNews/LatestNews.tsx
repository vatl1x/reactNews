import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import BannersList from "@/widgets/news/ui/BannersList/BannersList";
import styles from "./LatestNews.module.scss";

const LatestNews = () => {
    const { data, isLoading } = useGetNewsQuery({
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
