import styles from "./Image.module.scss";

interface Props {
    image: string;
}

const Image = ({ image }: Props) => {
    return image ? (
        <div className={styles.wrapper}>
            <img src={image} alt="news" className={styles.image} />
        </div>
    ) : null;
};

export default Image;
