import React from "react";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from './product'
import modeReducer from './mode'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  product : productReducer,
  mode : modeReducer,
})

const persistConfig = {
  key : "root",
  storage,
}

const persistReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer : persistReducers,
  middleware : getDefaultMiddleware({
    serializableCheck : false,
  }),
})

export default store