import styles from "./Categories.module.scss";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <button
                    className={
                        selectedCategory === category
                            ? styles.active
                            : styles.item
                    }
                    onClick={() => setSelectedCategory(category)}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
