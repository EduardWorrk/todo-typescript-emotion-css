import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTasksStore } from "../../store/tasks.ts";
import type { TaskType } from "../../store/tasks.ts";
import { inputStyles } from "./styles.ts";
import { css } from "@emotion/css";

export const InputAddTask = () => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addTask = () => {
    if (!ref.current || !ref.current.value.trim()) return;

    const newTask: TaskType = {
      id: Math.random().toString(),
      text: ref.current.value,
      status: "active",
    };

    dispatch(addTasksStore(newTask));
    ref.current.value = "";
  };

  return (
    <div
      className={css`
        display: flex;
        gap: 15px;
        margin-bottom: 10px;
      `}
    >
      <input
        ref={ref}
        type="text"
        className={inputStyles.input}
        placeholder="Добавьте новую задачу"
      />
      <button className={inputStyles.addTaskButton} onClick={addTask}>
        +
      </button>
    </div>
  );
};
