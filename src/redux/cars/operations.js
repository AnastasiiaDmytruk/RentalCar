import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params: body });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarBrands = createAsyncThunk(
  "cars/fetchCarBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/brands");
      // console.log("data", data);
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
      // console.log("data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
