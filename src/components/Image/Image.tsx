import styles from "./Image.module.scss";

const Image = ({ image }) => {
    return image ? (
        <div className={styles.wrapper}>
            <img src={image} alt="news" className={styles.image} />
        </div>
    ) : null;
};

export default Image;
