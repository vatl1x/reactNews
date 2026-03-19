import { CATEGORIES } from "../../constants/constants";
import type { IFilters } from "../../interfaces";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.scss";

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
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
