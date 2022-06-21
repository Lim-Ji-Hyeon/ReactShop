import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialStateValue = {products : []}

export const getList = createAsyncThunk("GET_PRODUCTS", async () => {
  const response = await axios.get("https://fakestoreapi.com/products")
  return response.data
})

export const setProductSlice = createSlice({
  name : "setProduct",
  initialState : {value : initialStateValue},
  reducers : {},
  extraReducers : {
    [getList.fulfilled] : (state, action) => {
      state.value = action.payload
    }
  },
})

export default setProductSlice.reducer
