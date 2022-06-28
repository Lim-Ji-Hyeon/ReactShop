import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], count: 0 },
  reducers: {
    add: (state, action) => {
      if (state.products.length === 0) {
        state.products.push(action.payload.products)
      } else if (state.products.length !== 0) {
        const isExist = state.products.find((product) => product.id === action.payload.products.id)
        if (isExist) {
          state.products = state.products.map((product) => {
            if (product.id === action.payload.products.id) {
              return {
                ...product,
                cartCount: ++product.cartCount
              }
            }
            return product
          })
        } else {
          state.products.push(action.payload.products)
        }
      }
      state.count = action.payload.count
    },
    increase: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            cartCount: ++product.cartCount
          }
        }
        return product
      })
      ++state.count
    },
    decrease: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            cartCount: --product.cartCount
          }
        }
        return product
      })
      --state.count
    },
    remove: (state, action) => {
      state.products = state.products.filter((product) => {
        if (product.id === action.payload.id) {
          state.count -= product.cartCount
        }
        return product.id !== action.payload.id
      })
    },
    removeAll: (state) => {
      state.products = []
      state.count = 0
    }
  }
})

export const { add, increase, decrease, remove, removeAll } = cartSlice.actions

export default cartSlice.reducer
