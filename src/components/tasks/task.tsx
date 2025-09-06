import type { TaskType } from "../../store/tasks.ts";
import { useState } from "react";
import { css } from "@emotion/css";
import type { FilterName } from "../../store/filter.ts";
import { styles } from "./styles.ts";

type Props = {
  id: string;
  text: string;
  status: FilterName;
  onDelete: (value: string) => void;
  setCompletedTask: (value: string, status: FilterName) => void;
  onEdit: (task: TaskType) => void;
};

export const Task = ({
  id,
  text,
  status,
  onDelete,
  setCompletedTask,
  onEdit,
}: Props) => {
  const [value, setValue] = useState<string>(text);
  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const editTask = () => {
    setOpen((prev) => !prev);
    setDropdown(false);
  };

  const isDoneStatus = status === "done";

  return (
    <div className={styles.task}>
      <div
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 5px;
          `}
        >
          {!open && (
            <input
              type="checkbox"
              checked={isDoneStatus}
              className={styles.checkbox}
              onChange={() => {
                setCompletedTask(id, isDoneStatus ? "active" : "done");
              }}
            />
          )}

          {!open && (
            <span
              className={css`
                font-weight: bold;
                font-size: 15px;
              `}
            >
              {value}
            </span>
          )}

          {open && (
            <div>
              <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={css`
          display: flex;
          gap: 5px;
        `}
      >
        {open && (
          <button
            className={styles.button}
            onClick={() => {
              setOpen((prev) => !prev);
              setDropdown(false);
              onEdit({ id, text, status });
            }}
          >
            Сохранить
          </button>
        )}

        <button
          className={styles.button}
          onClick={() => setDropdown((prevState) => !prevState)}
        >
          ...
        </button>
      </div>

      {dropdown && (
        <div className={styles.drowpdown}>
          <button className={styles.drowpdownBtn} onClick={editTask}>
            Редактировать
          </button>

          <button className={styles.drowpdownBtn} onClick={() => onDelete(id)}>
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};
