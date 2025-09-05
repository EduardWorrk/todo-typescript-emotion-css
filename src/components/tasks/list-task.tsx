import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  deleteTasks,
  editTask,
  setCompletedTask,
  type TaskType,
} from "../../store/tasks.ts";
import { Task } from "./task.tsx";
import type { FilterName } from "../../store/filter.ts";

export const ListTask = () => {
  const dispatch = useDispatch();
  const tasksStorage = useSelector((state: RootState) => state.tasksAll.tasks);
  const filterActive = useSelector(
    (state: RootState) => state.filters.filterActive,
  );

  const deleteTask = (id: string) => {
    dispatch(deleteTasks({ id }));
  };

  const setTask = (id: string, status: FilterName) => {
    dispatch(setCompletedTask({ id, status }));
  };

  const onEdit = (task: TaskType) => {
    dispatch(editTask(task));
  };

  const listTasks =
    filterActive !== "all"
      ? tasksStorage.filter((task) => task.status === filterActive)
      : tasksStorage;

  return (
    <div>
      {listTasks.map((task) => {
        return (
          <Task
            key={task.id}
            onEdit={onEdit}
            onDelete={deleteTask}
            setCompletedTask={setTask}
            {...task}
          />
        );
      })}
    </div>
  );
};
