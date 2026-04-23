
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../../model/types";
import Image from "@/shared/ui/Image/Image";
import styles from "./NewsBanner.module.scss";

interface Props{
    item: INews
}

const NewsBanner = ({ item }: Props) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.publishedAt)} by {item.source.name}
            </p>
        </div>
    );
};

export default NewsBanner;
