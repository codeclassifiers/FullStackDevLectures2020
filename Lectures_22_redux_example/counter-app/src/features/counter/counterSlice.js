import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
  secondaryCounter: 45,
  name: "Jill",
  lastName: "Jones",
};
/**
 * Slices contain
 * 1. name
 * 2. initialState -  initial values in our global data store
 * 3. reducers -  methods responsible for updating the state values
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("state", state.value);
      state.value += 1;
    },
    decrement: (state) => {
      console.log("state", state.value);
      state.value -= 1;
    },
  },
});

// exposing actions
export const { increment, decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
