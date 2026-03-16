import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./NewsBanner.module.scss";

const NewsBanner = ({ item }) => {
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
