import { combineReducers, configureStore, createAction, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

export const initialState = [
  {cartNumber : 0,},
  {productList : [],},
]


export const incrementCartNumber = createAction('Increment_Cart_Number')
export const addCart = createAction('ADD_CART')
export const purchase = createAction('PURCHASE')

const cartReducer = createReducer(initialState, {
  [addCart] : (state, {payload}) => {state[1].productList.push(payload.id)},
  [purchase] : (state) => {initialState},
  [incrementCartNumber] : (state, {payload}) => {state[0] = {cartNumber : payload.number += 1}},
})

const reducer = combineReducers({cartReducer})

const persistConfig = {
  key : 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
 
export const store = configureStore({
  reducer : persistedReducer,
  middleware : getDefaultMiddleware({
    serializableCheck : false,
  })
})