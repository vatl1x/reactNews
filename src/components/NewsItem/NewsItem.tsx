import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { INews } from "../../interfaces";
import styles from "./NewsItem.module.scss";

interface Props {
    item: INews;
}

const NewsBanner = ({ item }: Props) => {
    return (
        <li className={styles.item}>
            <div
                className={styles.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.publishedAt)} by {item.source.name}
                </p>
            </div>
        </li>
    );
};

export default NewsBanner;
