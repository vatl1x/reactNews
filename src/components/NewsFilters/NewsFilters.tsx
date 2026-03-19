import { CATEGORIES } from "../../constants/constants";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.scss";

const NewsFilters = ({ filters, changeFilter }) => {
    return (
        <div className={styles.filters}>
            <Slider step={100}>
                <Categories
                    categories={CATEGORIES}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) =>
                        changeFilter("category", category)
                    }
                />
            </Slider>

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter("keywords", keywords)}
            />
        </div>
    );
};

export default NewsFilters;
