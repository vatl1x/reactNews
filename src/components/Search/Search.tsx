import { useTheme } from "../../context/ThemeContext";
import styles from "./Search.module.scss";

interface Props {
    keywords: string;
    setKeywords: (keyword: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
    const { isDark } = useTheme();
    return (
        <div
            className={`${styles.search} ${isDark ? styles.dark : styles.light}`}
        >
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className={styles.input}
                placeholder="Введите имя для поиска"
            />
        </div>
    );
};

export default Search;
