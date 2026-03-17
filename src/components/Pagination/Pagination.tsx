import styles from "./Pagination.module.scss";
interface Props {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handlePageClick: (page: number) => void;
    currentPage: number;
    totalPages: number;
}

const Pagination = ({
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    currentPage,
    totalPages,
}: Props) => {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviousPage} className={styles.arrow} disabled={currentPage <= 1}>
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
            <button onClick={handleNextPage} className={styles.arrow} disabled={currentPage >= totalPages}>
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
