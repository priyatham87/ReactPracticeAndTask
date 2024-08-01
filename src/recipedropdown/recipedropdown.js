import axios from "axios";
import { useEffect, useState } from "react";

const RecipeDropDown = () => {
  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes");
    setRecipes(data.recipes);
    console.log(data.recipes);
  };

  return (
    <select>
      {recipe.map((eachRecipe) => {
        return <option value={eachRecipe.id}>{eachRecipe.name}</option>;
      })}
    </select>
  );
};

export default RecipeDropDown;
