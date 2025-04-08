import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      if (!state.favorites.includes(payload)) {
        state.favorites.push(payload);
      }
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((id) => id !== payload);
    },
    resetFavorites() {
      return initialState;
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetFavorites } =
  slice.actions;

export const favoritesReducer = slice.reducer;
