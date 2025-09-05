import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type FilterName = "active" | "done" | "all";

type initialState = {
  filterActive: string;
};

const initialState: initialState = {
  filterActive: "active",
};

const filtered = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterName>) => {
      state.filterActive = action.payload;
    },
  },
});
export const { setFilter } = filtered.actions;
export const filterSlice = filtered.reducer;
