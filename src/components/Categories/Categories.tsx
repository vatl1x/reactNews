import { forwardRef } from "react";
import styles from "./Categories.module.scss";

const Categories = forwardRef(({ categories, selectedCategory, setSelectedCategory },ref) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button
                className={!selectedCategory ? styles.active : styles.item}
                onClick={() => setSelectedCategory(null)}
            >
                All
            </button>
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
});

Categories.displayName = 'Categories' //чтобы в React DevTools компонент отображался с именем, а не как ForwardRef

export default Categories;
