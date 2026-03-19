import withSkeleton from "../../helpers/hocs/withSkeleton";
import type { INews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

interface Props{
    news: INews[]
}

const NewsList = ({ news }: Props) => {
    return (
        <div className={styles.list}>
            {news.map((item) => (
                <NewsItem key={item.id} item={item} />
            ))}
        </div>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;
