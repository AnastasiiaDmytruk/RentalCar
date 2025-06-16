import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filters/slice.js";
import { favoritesReducer } from "./favorites/slice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
