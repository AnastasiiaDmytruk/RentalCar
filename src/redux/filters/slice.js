import { createSlice } from "@reduxjs/toolkit";
// import { fetchCarsWithParams } from "../cars/operations.js";

const initialState = {
  filters: {
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  },
  page: 1,
  limit: 12,
  totalPages: null,
};

const slice = createSlice(
  {
    name: "filters",
    initialState,
    reducers: {
      setFilters(state, { payload }) {
        state.filters = { ...state.filters, ...payload };
      },
      resetFilters() {
        return initialState;
      },
      setPage(state, { payload }) {
        state.page = payload;
      },
      incrementPage(state) {
        state.page += 1;
      },
      resetPage(state) {
        state.page = 1;
      },
      setTotalPages(state, { payload }) {
        state.totalPages = payload;
      },
    },
  }
  // extraReducers: (builder) => {
  //     builder.addCase(fetchCarsWithParams.fulfilled, (state, { payload }) => {

  //     })
  // },
);
export const {
  setFilters,
  resetFilters,
  setPage,
  incrementPage,
  resetPage,
  setTotalPages,
} = slice.actions;

export const filterReducer = slice.reducer;
