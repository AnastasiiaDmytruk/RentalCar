import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCarsByBrand = createAsyncThunk(
  "cars/fetchByBrand",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsWithParams = createAsyncThunk(
  "cars/fetchWithParams",
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
