import { useAppDispatch } from "@/app/appStore";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./NewsFilters.module.scss";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { CATEGORIES } from "@/shared/constants/constants";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
    const { isDark } = useTheme();

    const dispatch = useAppDispatch();

    return (
        <div className={styles.filters}>
            <Slider step={100} isDark={isDark}>
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
