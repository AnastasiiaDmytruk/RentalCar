import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsByBrand, fetchCarsWithParams } from "../cars/operations.js";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsByBrand.pending, handlePending)
      .addCase(fetchCarsByBrand.rejected, handleRejected)
      .addCase(fetchCarsByBrand.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })
      .addCase(fetchCarsWithParams.pending, handlePending)
      .addCase(fetchCarsWithParams.rejected, handleRejected)
      .addCase(fetchCarsWithParams.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      });
  },
});
export const carsReducer = slice.reducer;
