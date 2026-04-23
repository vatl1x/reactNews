import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./NewsList.module.scss";
import { INews } from "@/entities/news/model/types";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import { DirectionType, SkeletonType } from "@/shared/interfaces";

interface Props {
    news?: INews[];
    type?: SkeletonType;
    direction?: DirectionType;
}

const NewsList = ({ news, type = "item" }: Props) => {
    return (
        <ul className={`${type === "item" ? styles.items : styles.banners}`}>
            {news?.map((item) => (
                <NewsCard key={item.id} item={item} type={type} />
            ))}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;
