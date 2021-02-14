import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Character() {
  const [charactersArray, updateCharactersArray] = useState([]);
  async function getCharacters() {
    const responseObject = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    // console.log(responseObject.data.results);
    updateCharactersArray(responseObject.data.results);
  }
  useEffect(() => {
    getCharacters();
  }, []);
  function renderCharacters() {
    // map syntax:- array.map(()=>{})
    return charactersArray.map((characterItemJSON) => {
      return (
        <div key={characterItemJSON.id}>
          <Link to={`/character/${characterItemJSON.id}`}>
            <h1>{characterItemJSON.name}</h1>
          </Link>
        </div>
      );
    });
  }
  return <div>{renderCharacters()}</div>;
}
