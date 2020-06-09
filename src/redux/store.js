import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { tokenSlice } from "./token/tokenReducer";
import { userSlice } from "./user/userReducer";
import { dashBoardSlice } from "./dashBoard/dashBoardReducer";
import { chellangeSlice } from "./dashBoard/chellangeReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const authReducer = combineReducers({
  [tokenSlice.name]: tokenSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [dashBoardSlice.name]: dashBoardSlice.reducer,
  [chellangeSlice.name]: chellangeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
  devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);
