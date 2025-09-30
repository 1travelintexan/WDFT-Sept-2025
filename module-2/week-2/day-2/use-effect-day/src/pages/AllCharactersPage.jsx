import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllCharactersPage = () => {
  const [charactersState, setCharactersState] = useState();

  useEffect(() => {
    async function getAllCharacters() {
      try {
        //**********Fetch Example ***********/
        // const response = await fetch(
        //   "https://rickandmortyapi.com/api/character"
        // );
        // const parsedData = await response.json();
        // console.log(parsedData);
        // setCharactersState(parsedData.results);

        //***************Axios Example **********/
        const { data } = await axios(
          "https://rickandmortyapi.com/api/character"
        );
        console.log(data);
        setCharactersState(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCharacters();
  }, []);
  return (
    <div>
      <h2>Rick and Morty Characters:</h2>
      <section id="character-page">
        {charactersState &&
          charactersState.map((oneCharacter) => {
            return (
              <Link
                key={oneCharacter.id}
                className="character-card"
                to={`/one-character/${oneCharacter.id}`}
              >
                <div>
                  <img alt={oneCharacter.name} src={oneCharacter.image} />
                  <p>{oneCharacter.name}</p>
                </div>
              </Link>
            );
          })}
      </section>
    </div>
  );
};
