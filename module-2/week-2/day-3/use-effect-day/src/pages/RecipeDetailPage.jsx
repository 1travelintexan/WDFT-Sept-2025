import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RecipeDetailPage = () => {
  const [oneRecipe, setOneRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    async function getOneRecipe() {
      try {
        const { data } = await axios(
          `https://dummyjson.com/recipes/${recipeId}`
        );
        console.log(data);
        setOneRecipe(data);
      } catch (err) {
        console.log(err);
      }
    }
    getOneRecipe();
  }, [recipeId]);

  return (
    <div>
      <h2>The {oneRecipe.name}'s Page</h2>
      <img alt={oneRecipe.name} src={oneRecipe.image} />
    </div>
  );
};
