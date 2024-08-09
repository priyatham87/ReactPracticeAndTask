import React, { useContext, useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import { RecipeContext } from "../navigations/navigation";
import './RecipeMaker.css';
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeMaker = () => {
    const { recipe, addfavouriteRecipe ,viewRecipesItems} = useContext(RecipeContext);
    const [searchFood,setSearchFood]=useState("")
    const [filteredList, setFilteredList] = useState([])
    const [isFavourite,setIsFavourite]=useState(false)

    useEffect(()=>{

        fetchHandler()

    },[searchFood])
    
    const addFoodHandler = (eachFood) => {
        
        addfavouriteRecipe(eachFood);    
        setIsFavourite(true)
    };

    const viewRecipesHandler=(eachItems)=>{
        viewRecipesItems(eachItems)
    }

    const searchHandler=(event)=>{
        const getSearchValue=event.target.value
        setSearchFood(getSearchValue)
        
    }

    const fetchHandler=async()=>{
        try{
            const {status, data}=await axios.get(`https://dummyjson.com/recipes/search?q=${searchFood}`)
            const newData=data.recipes.map(eachData=>{
                return {...eachData,existsInFavourit:false}
            })
            
            if(status===200){
                setFilteredList(newData)  
            }
        }
        catch(err){
        }
    }

    return (
        <>
            <NavBar />
            <center>
            <input placeholder="search"
            onChange={searchHandler}
            value={searchFood}></input>
            </center>
            <div className="recipe-container" style={{backgroundColor:"ghostwhite"}}>
                {
                    filteredList.map(each => (
                        <div key={each.name} className="recipe-card">
                            <h2>{each.name}</h2>
                            <img src={each.image} alt={each.name} width={200} height={200} />
                            <Link to={"/viewRecipes"}><button onClick={()=>viewRecipesHandler(each)}>View Recipe</button></Link>
                            {isFavourite ? (
                                <Link to={"/favouriterecipes"}><button >Go To Favourite</button></Link>
                            ) : (
                                <button onClick={() => addFoodHandler(each)}>Add Favourite</button>
                            )}
                        </div>
                    ))} 
            </div>
        </>
    );
};

export default RecipeMaker;
