import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { tokenSlice } from "./token/tokenReducer";
import { userSlice } from "./user/userReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const authReducer = combineReducers({
  [tokenSlice.name]: tokenSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

persistStore(store);
