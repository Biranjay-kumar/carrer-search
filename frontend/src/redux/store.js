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
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configure persistence settings
const persistConfig = {
    key: 'root', // Root key for persisted state
    version: 1,
    storage, // Use local storage as the storage engine
};

// Combine your reducers
const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice,
});

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with middleware handling serializable actions from redux-persist
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Create persistor and export it alongside the store
export const persistor = persistStore(store);
export default store;
