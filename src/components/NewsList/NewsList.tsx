import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

const NewsList = ({ news }) => {
    return (
        <div className={styles.list}>
            {news.map((item) => (
                <NewsItem key={item.id} item={item} />
            ))}
        </div>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
