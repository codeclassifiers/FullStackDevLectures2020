import axios from "axios";
import { useEffect, useState } from "react";
export function CharacterInformation(props) {
  //   console.log("props match:", props.match, props.match.params.characterId);
  /**
   * Step 1: Make API call by using effect hook
   * Step 2: Store the response from API call in a state variable
   * Step 3: Write a render fxn which show data from API call
   */
  const [characterInfo, updateCharacterInfo] = useState(null);
  async function fetchCharacterInformation() {
    const characterId = props.match.params.characterId;
    const responseObject = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    // console.log("responseObject", responseObject.data);
    updateCharacterInfo(responseObject.data);
  }
  useEffect(() => {
    fetchCharacterInformation();
  }, []);

  function renderCharacterInformation() {
    if (characterInfo != null) {
      console.log(characterInfo);
      return (
        <div>
          <h1>{characterInfo.name}</h1>
          <img src={characterInfo.image} />
        </div>
      );
    }
  }
  return <div>{renderCharacterInformation()}</div>;
}
