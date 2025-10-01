import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetailPage = () => {
  const [oneCharacter, setOneCharacter] = useState({});
  //this tool grabs the id from the url
  const { characterId } = useParams();

  useEffect(() => {
    async function getOneCharacter() {
      try {
        //**************fetch  (async and await)  example******** */
        // const response = await fetch(
        //   `https://rickandmortyapi.com/api/character/${characterId}`
        // );
        // const data = await response.json();
        // console.log(data);
        // setOneCharacter(data);

        //*************axios (async and await) example **********/
        const { data } = await axios(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setOneCharacter(data);

        //************fetch (.then and .catch) example *****/
        // fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((data) => {data
        //     setOneCharacter(data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        //****************axios (.then and .catch) example ********/
        // axios(`https://rickandmortyapi.com/api/character/${characterId}`)
        //   .then(({ data }) => {
        //     setOneCharacter(data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      } catch (error) {
        console.log(error);
      }
    }

    getOneCharacter();
  }, [characterId]);

  return (
    <div>
      <h2>{oneCharacter.name}'s Page</h2>
      <img alt={oneCharacter.name} src={oneCharacter.image} />
      <h4>Species: {oneCharacter.species}</h4>
    </div>
  );
};
