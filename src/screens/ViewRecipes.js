import { useContext, useState } from "react";
import NavBar from "../navbar/navbar";
import { RecipeContext } from "../navigations/navigation";
import OrderList from "../list/orderlist";
import './RecipeMaker.css'; 
import { Link } from "react-router-dom";

const ViewRecipes = () => {
    const { viewRecipes ,addfavouriteRecipe,} = useContext(RecipeContext);
   const [isFavourite,setIsFavourite]=useState(false)
   
    const addFodHandlerInView=(foodItem)=>{
        addfavouriteRecipe(foodItem)
        setIsFavourite(true)
    }
    
    return (
        <>
            <NavBar />
            <div className="recipe-container">
                {
                    Object.keys(viewRecipes).length > 0 ?
                        <div className="recipe-card">
                            <h2>{viewRecipes.name}</h2>
                            <img src={viewRecipes.image} width={300} height={300} alt="" />
                            <h3>INGREDIENTS</h3>
                            <OrderList list={viewRecipes.ingredients} />
                            <h3>INSTRUCTIONS</h3>
                            <OrderList list={viewRecipes.instructions} />
                            {isFavourite ? (
                                <Link to={"/favouriterecipes"}><button >Go To Favourite</button></Link>
                            ) : (
                                <button onClick={()=>addFodHandlerInView(viewRecipes)}>Add To Favourite</button>
                            )}
                        </div> :
                        <h2>Loading!!!!</h2>
                }
            </div>
        </>
    )
}

export default ViewRecipes;
