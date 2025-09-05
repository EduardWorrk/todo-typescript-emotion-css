import { configureStore } from "@reduxjs/toolkit";
import { tasksAllSlice } from "./tasks.ts";
import { filterSlice } from "./filter.ts";

const store = configureStore({
  reducer: {
    tasksAll: tasksAllSlice,
    filters: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
