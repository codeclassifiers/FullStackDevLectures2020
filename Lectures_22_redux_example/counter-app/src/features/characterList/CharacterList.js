// Step 1: Import useSelector hook
// Step 1 for updating values: Import useDispatch hook from "react-redux" package
import { useSelector, useDispatch } from "react-redux";
import {
  updateCharacter,
  updateVillain,
  updateMovieName,
} from "./CharacterNameSlice";
export function CharacterList() {
  const characterData = useSelector((state) => state.character);
  // Step 2 for updating store values: write dispatch variable
  const dispatch = useDispatch();
  console.log(characterData);
  return (
    <div>
      <h5>Wanda Vision Series</h5>
      <h5>Lead Character's Name: {characterData.characterName}</h5>
      <h5>Universe: {characterData.universe}</h5>
      <button onClick={() => dispatch(updateCharacter("Vision"))}>
        Show Side Character
      </button>
      <div>
        <h5>{characterData.secondaryCharacterName}</h5>
      </div>
      <button onClick={() => dispatch(updateVillain("Thanos"))}>
        Show Previous Movie Villain
      </button>
      <div>
        <h5>{characterData.mainVillain}</h5>
      </div>
      <button onClick={() => dispatch(updateMovieName("Avengers"))}>
        Show Movie Name
      </button>
      <div>
        <h5>{characterData.movieName}</h5>
      </div>
    </div>
  );
}
