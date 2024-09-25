import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import RecipeMaker from "../screens/RecipeMaker";
import FavouriteRecipes from "../screens/favouriteRecipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewRecipes from "../screens/ViewRecipes";

export const RecipeContext = createContext();

const NavigationStack = () => {
  const [recipe, setRecipe] = useState([]);

  const [favouriteRecipe, setFavouriteRecipe] = useState([]);

  const [viewRecipes, setViewRecipes] = useState({});

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      const newData = data.recipes.map((eachData) => {
        return { ...eachData, existsInFavorite: false };
      });
      if (status === 200) {
        setRecipe(newData);
      }
    } catch (err) {}
  };

  const addfavouriteRecipe = (newDish) => {
    const recipeExist = favouriteRecipe.find(
      (eachFood) => eachFood.id === newDish.id
    );

    setViewRecipes({ ...viewRecipes, existsInFavorite: true });

    const newRecipes = recipe.map((eachRecipe) => {
      if (eachRecipe.id === newDish.id) {
        return { ...eachRecipe, existsInFavorite: true };
      } else {
        return eachRecipe;
      }
    });
    setRecipe(newRecipes);

    if (recipeExist) {
      toast.error("already exists in favourite foods! !", {
        position: "top-right",
      });
    } else {
      setFavouriteRecipe([...favouriteRecipe, newDish]);
      toast.success("Added to favourites !", {
        position: "top-right",
      });
    }
  };

  const removeFromFavourite = (id) => {
    const newRecipesList = recipe.map((eachRecipe) => {
      if (eachRecipe.id === id) {
        return { ...eachRecipe, existsInFavorite: false };
      } else {
        return eachRecipe;
      }
    });

    setRecipe(newRecipesList);
    const newfavouriteRecipe = favouriteRecipe.filter((each) => each.id !== id);
    setFavouriteRecipe(newfavouriteRecipe);
  };

  const viewRecipesItems = (eachRecipe) => {
    setViewRecipes(eachRecipe);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipe: recipe,
        favouriteRecipe: favouriteRecipe,
        addfavouriteRecipe: addfavouriteRecipe,
        removeFromFavourite: removeFromFavourite,
        viewRecipes: viewRecipes,
        viewRecipesItems: viewRecipesItems,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeMaker />} />
          
          <Route path="recipemaker" element={<RecipeMaker />} />

          <Route path="favouriterecipes" element={<FavouriteRecipes />} />

          <Route path="viewRecipes" element={<ViewRecipes />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RecipeContext.Provider>
  );
};
export default NavigationStack;
