import React, { useContext } from "react";
import NavBar from "../navbar/navbar";
import { RecipeContext } from "../navigations/navigation";
import './RecipeMaker.css'; 

const FavouriteRecipes = () => {
    const { favouriteRecipe, removeFromFavourite } = useContext(RecipeContext);

    const removeFoodHandler = (eachFood) =>{
        removeFromFavourite(eachFood.id);
    };

    return (
        <>
            <NavBar />
            <center><h2>Welcome to Favourite Recipes Page</h2></center>
            <div className="recipe-container">
                {favouriteRecipe.length > 0 ?
                    favouriteRecipe.map(each => (
                        <div key={each.id} className="recipe-card">
                            <h2>{each.name}</h2>
                            <img src={each.image} alt={each.name} width={200} height={200} />
                            <button onClick={() => removeFoodHandler(each)}>Remove Food</button>
                        </div>
                    ))
                    :
                    <h2>Data not found</h2>
                }
            </div>
        </>
    );
};

export default FavouriteRecipes;
