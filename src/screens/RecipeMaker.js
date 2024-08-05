import { useContext } from "react";
import NavBar from "../navbar/navbar";
import { RecipeContext } from "../navigations/navigation";
import { useNavigate } from "react-router-dom";

const RecipeMaker=()=>{
    const {recipe,addfavouriteRecipe}=useContext(RecipeContext)
    console.log(recipe);
    const navigate = useNavigate();

    const addFoodHandler=(eachFood)=>{
        addfavouriteRecipe(eachFood)
    }

    const goToFavoriteHandler = () => {
        navigate("favouriteRecipes");
      };
    
    return(
        <>
        <NavBar/>
        <h2>welcome to RecipeMaker page</h2>
        {recipe && recipe.length>0 &&
           recipe.map(each=>{
                return(
                    <>
                    <h2>{each.name}</h2>
                    <img src={each.image} alt="" width={200} height={200}/>
                    <button>view Recipe</button>
                    {
                        each.existsInFavorite ?
                        <button onClick={goToFavoriteHandler}>Go To Favourite</button>:
                        <button onClick={()=>addFoodHandler(each)}>Add Favourite</button>
                    }
                    </>
                )
            })
        }
        </>
    )
}
export default RecipeMaker;