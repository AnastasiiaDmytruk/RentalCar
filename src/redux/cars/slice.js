import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCarById,
  fetchAllCars,
  fetchCarBrands,
} from "../cars/operations.js";

const initialState = {
  cars: [],
  brands: [],
  currentCar: null,
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
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (payload.page > 1) {
          const uniqueCars = payload.cars.filter(car => {
                        return !state.cars.some(existingCar => existingCar.id === car.id);
                    });
          state.cars.push(...uniqueCars);
          return;
        }

        
        state.cars = payload.cars;

      })
      .addCase(fetchCarBrands.pending, handlePending)
      .addCase(fetchCarBrands.rejected, handleRejected)
      .addCase(fetchCarBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.brands = payload;
      })
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.rejected, handleRejected)
      .addCase(fetchCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentCar = payload;
      });
  },
});
export const carsReducer = slice.reducer;
