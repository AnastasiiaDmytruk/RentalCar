import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      const index = state.favorites.indexOf(payload);
      if (index !== -1) {
        state.favorites = state.favorites.filter((id) => id !== payload);
      } else {
        state.favorites.push(payload);
      }
    },
  },
});

export const { toggleFavorite } = slice.actions;

export const favoritesReducer = slice.reducer;
