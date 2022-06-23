import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import cartReducer from "./cart"
import modeReducer from "./mode"
import setProductReducer from "./setProduct"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cart: cartReducer,
  mode: modeReducer,
  setProduct: setProductReducer
})

const persistConfig = {
  key: "root",
  storage
}

const persistReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store
