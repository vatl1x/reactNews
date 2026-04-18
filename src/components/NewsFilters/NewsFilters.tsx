import { CATEGORIES } from "../../constants/constants";
import type { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.scss";

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.filters}>
            <Slider step={100}>
                <Categories
                    categories={CATEGORIES}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) =>
                        dispatch(
                            setFilters({ key: "category", value: category }),
                        )
                    }
                />
            </Slider>

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) =>
                    dispatch(setFilters({ key: "keywords", value: keywords }))
                }
            />
        </div>
    );
};

export default NewsFilters;
