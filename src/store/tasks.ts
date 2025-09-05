import { createSlice } from "@reduxjs/toolkit";
import type { FilterName } from "./filter.ts";

export type TaskType = {
  id: string;
  text: string;
  status: FilterName;
};

type initialState = {
  tasks: TaskType[];
};

const initialState: initialState = {
  tasks: [],
};

const tasksAll = createSlice({
  name: "tasksAll",
  initialState,
  reducers: {
    addTasksStore: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },

    deleteTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    setCompletedTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            status: action.payload.status,
          };
        }
        return task;
      });
    },

    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            text: action.payload.text,
          };
        } else {
          return task;
        }
      });
    },
  },
});

export const { addTasksStore, deleteTasks, setCompletedTask, editTask } =
  tasksAll.actions;
export const tasksAllSlice = tasksAll.reducer;
