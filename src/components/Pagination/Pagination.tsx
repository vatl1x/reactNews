import { useTheme } from "../../context/ThemeContext";
import type { IPaginationProps } from "../../interfaces";

import styles from "./Pagination.module.scss";

const Pagination = ({
    totalPages,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    currentPage,
}: IPaginationProps) => {
    const { isDark } = useTheme();

    return (
        <div
            className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
        >
            <button
                onClick={handlePreviousPage}
                className={styles.arrow}
                disabled={currentPage <= 1}
            >
                {"<"}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        onClick={() => handlePageClick(idx + 1)}
                        className={styles.pageNumber}
                        disabled={idx + 1 === currentPage}
                        key={idx}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrow}
                disabled={currentPage >= totalPages}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
