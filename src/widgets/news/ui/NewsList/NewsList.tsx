import withSkeleton from "@/shared/hocs/withSkeleton";
import NewsItem from "@/entities/news/ui/NewsItem/NewsItem";
import styles from "./NewsList.module.scss";
import { INews } from "@/entities/news/model/types";

interface Props {
    news: INews[];
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

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
