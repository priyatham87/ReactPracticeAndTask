import axios from "axios";
import { useEffect, useState } from "react";

const RecipeDropDown = () => {
  const [recipe, setRecipes] = useState([]);

  const [selectedRecipe, setSelectedRecipe] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes");
    const revampData = data.recipes.map((eachRecipe) => {
      return { id: eachRecipe.id, recipeName: eachRecipe.name };
    });
    setRecipes(revampData);
  };

  const selectHandler = (event) => {
    console.log(event.target.value);
    const selectedRecipeId = event.target.value;

    fetchEachRecipe(selectedRecipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );

    setSelectedRecipe(data);

    console.log(data);
  };

  return (
    <div>
      {recipe.length > 0 ? (
        <select onChange={selectHandler}>
          {recipe.map((each) => (
            <option value={each.id} key={each.id}>
              {each.recipeName}
            </option>
          ))}
        </select>
      ) : (
        <h5>No recipes found</h5>
      )}

      {Object.keys(selectedRecipe).length > 0 && (
        <div>
          <h4>{selectedRecipe.name}</h4>
          <h4>{selectedRecipe.rating}</h4>
        </div>
      )}
    </div>
  );
};

export default RecipeDropDown;
