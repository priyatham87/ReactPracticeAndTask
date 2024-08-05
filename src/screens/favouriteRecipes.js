import { useContext } from "react";
import NavBar from "../navbar/navbar";
import { RecipeContext } from "../navigations/navigation";

const FavouriteRecipes=()=>{
    const {favouriteRecipe,removeFromFavourite}=useContext(RecipeContext)

    const removeFoodHandler=(eachFood)=>{
        removeFromFavourite(eachFood.id)


    }
    return(
        <>
        <NavBar/>
        <h2>welcome to Favourite Recipes Page</h2>
        {
            favouriteRecipe.length>0?
            <>
            {
                favouriteRecipe.map(each=>{
                    return(
                        <>
                        <h2>{each.name}</h2>
                        <img src={each.image} alt="" width={200} height={200}/>
                        <button onClick={()=>removeFoodHandler(each)}>Remove Food</button>
                        </>
                    )
                })
            }
            </>:
            <><h2>Data not found</h2></>
        }
        </>
    )
}
export default FavouriteRecipes;