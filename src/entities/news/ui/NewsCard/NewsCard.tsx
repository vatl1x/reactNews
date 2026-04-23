import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import styles from "./NewsCard.module.scss";
import Image from "@/shared/ui/Image/Image";
import { SkeletonType } from "@/shared/interfaces";

interface Props {
    item: INews;
    type: SkeletonType;
}

const NewsBanner = ({ item, type = "item" }: Props) => {
    return (
        <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
            {type === "banner" ? (
                <Image image={item?.image} />
            ) : (
                <div
                    className={styles.wrapper}
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
            )}

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
