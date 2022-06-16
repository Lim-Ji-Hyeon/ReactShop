import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { products: [], count: 0 }

export const productSlice = createSlice({
  name: 'product',
  initialState: { value: initialStateValue },
  reducers: {
    add: (state, action) => {
      state.value.products.push(action.payload.product)
      state.value.count = action.payload.count
    },
    purchase: (state) => {
      state.value.product = initialStateValue.products
      state.value.count = initialStateValue.count
    },
  },
})

export const { add, purchase } = productSlice.actions

export default productSlice.reducer
