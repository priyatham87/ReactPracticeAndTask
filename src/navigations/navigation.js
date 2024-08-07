import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from "../screens/homepage";
import AboutPage from "../screens/aboutpage";
import SettingPage from "../screens/settingspage";
import BlogPage from "../screens/blogpage";
import InvalidPage from "../screens/invalidpage";
import UserScreen from "../screens/userscreen";
import AdminScreen from "../screens/adminscreen";
import RecipePage from "../screens/recipescreen";
import RecipeDetails from "../screens/recipedetails";
import DoctorScreen, { NewDoctors, OldDoctors } from "../screens/doctorscreen";
import DropDownList from "../dropdownlist/dropdown";
import RecipeDropDownList from "../screens/recipedropdownlist";
import UseReducerTicket from "../screens/UseReducer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import RecipeMaker from "../screens/RecipeMaker";
import FavouriteRecipes from "../screens/favouriteRecipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewRecipes from "../screens/ViewRecipes";

export const RecipeContext=createContext()

const NavigationStack=()=>{
    const [recipe,setRecipe]=useState([]);

    const [favouriteRecipe,setFavouriteRecipe]=useState([])

    const [viewRecipes,setViewRecipes]=useState({})

    useEffect(()=>{
        FetchData();
    },[])

    const FetchData=async()=>{
        try{
            const {status,data}=await axios.get("https://dummyjson.com/recipes")
            const newData=data.recipes.map(eachData=>{
                return {...eachData,existsInFavourit:false}
            })
        if(status===200)
        {
            setRecipe(newData)
        }
        }
        catch(err){

        }
    }

    const addfavouriteRecipe=(newDish)=>{
        const recipeExist=favouriteRecipe.find((eachFood)=>eachFood.id===newDish.id)
        
        const newRecipes = recipe.map((eachRecipe) => {
            if (eachRecipe.id === newDish.id) {
              return { ...eachRecipe, existsInFavorite: true };
            } else {
              return eachRecipe;
            }
          }); 
          setRecipe(newRecipes);

        if(recipeExist){
            toast.error("already exists in favourite foods! !", {
                position: "top-right",
              });

        }
        else{
            setFavouriteRecipe([...favouriteRecipe,newDish])
            toast.success("Added to favourites !", {
                position: "top-right",
              });
        } 
    }

    const removeFromFavourite=(id)=>{
        const newRecipesList = recipe.map((eachRecipe) => {
            if (eachRecipe.id === id) {
              return { ...eachRecipe, existsInFavorite: false };
            } else {
              return eachRecipe;
            }
          });
      
          setRecipe(newRecipesList);
       const newfavouriteRecipe=favouriteRecipe.filter(each=>each.id!==id)
       setFavouriteRecipe(newfavouriteRecipe)

    }

    const viewRecipesItems=(eachRecipe)=>{
        setViewRecipes(eachRecipe)

    }

    return(
        <RecipeContext.Provider value={{
            recipe:recipe,
            favouriteRecipe:favouriteRecipe,
            addfavouriteRecipe:addfavouriteRecipe,
            removeFromFavourite:removeFromFavourite,
            viewRecipes:viewRecipes,
            viewRecipesItems:viewRecipesItems
        }}>
            <BrowserRouter>
        <Routes>
            {/* static routes */}
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/settings" element={<SettingPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="*" element={<InvalidPage/>}/>
            <Route path="user" element={<UserScreen/>}/>
            <Route path="user/*" element={<UserScreen/>} />
            <Route path="user/admin" element={<AdminScreen/>} />
            <Route path="recipe" element={<RecipePage/>}/>
            
            <Route path="doctors" element={<DoctorScreen/>}>
            <Route path="new" element={<NewDoctors/>}/>
            <Route path="old" element={<OldDoctors/>}/>
            </Route>

            <Route path="dropdown" element={<DropDownList/>}/>

            <Route path="recipedropdown" element={<RecipeDropDownList/>}/>

            <Route path="usereducer" element={<UseReducerTicket/>}/>

            <Route path="recipemaker" element={<RecipeMaker/>}/>

            <Route path="favouriterecipes" element={<FavouriteRecipes/>}/>

            <Route path="viewRecipes" element={<ViewRecipes/>}/>

            {/* dynamic routes */}
            <Route path="recipe/:cuisine/:recipeId" element={<RecipeDetails/>} />
        </Routes>
        </BrowserRouter>
        <ToastContainer/>
        </RecipeContext.Provider>
    )
}
export default NavigationStack;