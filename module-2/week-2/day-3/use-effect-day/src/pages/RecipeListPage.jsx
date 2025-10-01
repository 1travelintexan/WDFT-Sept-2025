import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const RecipeListPage = () => {
  const [allRecipeState, setallRecipeState] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/recipes");
        console.log(data.recipes);
        setallRecipeState(data.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipe();
  }, []);
  return (
    <div>
      <h2>Recipes!</h2>
      {/* map over the array of recipes  */}
      <section>
        {allRecipeState.map((recipe) => {
          return (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} />
              <Link to={`/one-recipe/${recipe.id}`}>
                <p>{recipe.name}</p>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};
