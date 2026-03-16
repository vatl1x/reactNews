import styles from "./Image.module.scss";

const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt="news" /> : null}
        </div>
    );
};

export default Image;
