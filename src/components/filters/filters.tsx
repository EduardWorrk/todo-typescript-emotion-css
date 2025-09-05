import { styles } from "./styles.ts";
import { useDispatch, useSelector } from "react-redux";
import { type FilterName, setFilter } from "../../store/filter.ts";
import type { RootState } from "../../store";

type FilterType = {
  key: FilterName;
  label: string;
};

const FILTERS: FilterType[] = [
  { key: "active", label: "Активные" },
  { key: "done", label: "Завершенные" },
  { key: "all", label: "Все" },
];

export const Filters = () => {
  const dispatch = useDispatch();
  const filterActive = useSelector(
    (state: RootState) => state.filters.filterActive,
  );
  const tasksStorage = useSelector((state: RootState) => state.tasksAll.tasks);

  if (tasksStorage.length === 0) {
    return;
  }

  return (
    <div className={styles.filters}>
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => dispatch(setFilter(key))}
          className={`${styles.filtersButton} ${styles.filterButtonActive(
            filterActive === key ? "#b9b9b9" : "#999",
          )}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
