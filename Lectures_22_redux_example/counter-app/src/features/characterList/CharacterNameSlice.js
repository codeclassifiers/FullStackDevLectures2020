// Step 0: Import CreateSlice from redux tool kit
import { createSlice } from "@reduxjs/toolkit";

// Step 1:-
const initialState = {
  characterName: "Wanda Maximoff",
  secondaryCharacterName: "",
  universe: "Marvel Cinematic Universe",
  mainVillain: "",
  movieName: "",
};

// Step 2:-
export const characterNameSlice = createSlice({
  name: "characterNames",
  initialState: initialState,
  reducers: {
    updateCharacter: (state, characterName) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("state", state.secondaryCharacterName, characterName.payload);
      state.secondaryCharacterName = characterName.payload;
    },
    updateVillain: (state, villainObject) => {
      console.log(state.mainVillain, villainObject);
      state.mainVillain = villainObject.payload;
    },
    updateMovieName: (state, movieObject) => {
      state.movieName = movieObject.payload;
    },
  },
});

// Step 3: Expose actions from slice
export const {
  updateCharacter,
  updateVillain,
  updateMovieName,
} = characterNameSlice.actions;

// Step 4: Export the slice itself
export default characterNameSlice.reducer;
