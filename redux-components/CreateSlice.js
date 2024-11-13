import { createSlice } from "@reduxjs/toolkit";
const initialsttate = {
  count: 0,
};
const counterSlice=createSlice({
  name: "counter",
  initialState: initialsttate,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
}
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
