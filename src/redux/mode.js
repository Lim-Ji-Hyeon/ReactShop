import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {color : "black"}

export const modeSlice = createSlice({
  name : "mode",
  initialState : {value : initialStateValue},
  reducers : {
    change : (state, action) => {
      state.value = action.payload
    },
  },
})


export const {change} = modeSlice.actions

export default modeSlice.reducer