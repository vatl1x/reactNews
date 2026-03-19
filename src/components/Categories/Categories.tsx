import { forwardRef, type ForwardedRef } from "react";
import styles from "./Categories.module.scss";
import type { CategoriesType } from "../../interfaces";

interface Props {
    categories: CategoriesType[];
    selectedCategory: CategoriesType | null;
    setSelectedCategory: (category: CategoriesType | null) => void;
}

const Categories = forwardRef(
    (
        { categories, selectedCategory, setSelectedCategory }: Props,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
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
    },
);

Categories.displayName = "Categories"; //чтобы в React DevTools компонент отображался с именем, а не как ForwardRef

export default Categories;
