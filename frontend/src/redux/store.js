import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import jobSlice from "./jobSlice.js";
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
import storage from "redux-persist/lib/storage"; // Use local storage for persistence
import companySlice from "./companySlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage, // localStorage for web
  whitelist: ["auth", "job"], // Persist only specific slices
};

const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company: companySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
