import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";
import { formateDate } from "../../helpers/formatDate";
import styles from "./Header.module.scss";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <header
            className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
        >
            <div className={styles.info}>
                <h1 className={styles.title}>NEWS REACT</h1>
                <p className={styles.date}>{formateDate(new Date())}</p>
            </div>
            <img
                src={isDark ? themeIcons.dark : themeIcons.light}
                width={30}
                alt="theme"
                onClick={toggleTheme}
            />
        </header>
    );
};
export default Header;
