import { configureStore } from "@reduxjs/toolkit";
// Step 1: Import reducer
import counterReducer from "../features/counter/counterSlice";
import characterReducer from "../features/characterList/CharacterNameSlice";

// Step 2: Pass that reducer to store
export default configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer,
  },
});
