import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {productId : [], count : 0}

export const productSlice = createSlice({
  name : "product",
  initialState : {value : initialStateValue},
  reducers : {
    add : (state, action) => {
      state.value.productId.push(action.payload.productId)
      state.value.count = action.payload.count
    },
    purchase : (state) => {
      state.value.productId = initialStateValue.productId
      state.value.count = initialStateValue.count
    },
  },
})


export const {add, purchase} = productSlice.actions

export default productSlice.reducer