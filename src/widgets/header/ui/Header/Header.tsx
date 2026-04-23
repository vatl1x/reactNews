import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/helpers/formatDate";
import styles from "./Header.module.scss";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";

const Header = () => {
    const { isDark } = useTheme();
    return (
        <header
            className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
        >
            <div className={styles.info}>
                <h1 className={styles.title}>NEWS REACT</h1>
                <p className={styles.date}>{formateDate(new Date())}</p>
            </div>
            <ThemeButton />
        </header>
    );
};
export default Header;
