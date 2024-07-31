import { useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import axios from "axios";
import OrderList from "../list/orderlist";
import { Link } from "react-router-dom";

const RecipePage=()=>{
     
        const [loader,setLoader]=useState(true);
        const [recipe,setRecipe]=useState([]);

        useEffect(()=>{
            FetchData();
        },[])
    
        const FetchData=async()=>{
            try{
                const {status,data}=await axios.get("https://dummyjson.com/recipes")
            if(status===200)
            {
                setRecipe(data.recipes)
                setLoader(false)
            }
            }
            catch(err){

            }
        }
    return(
        <>
        <NavBar/>
        <h2>welcome to Recipe Page</h2>
        {
            loader?
            <>
            <h2>Page Loading!!!!</h2>
            </>:
            <>
            {
                recipe.map((each) => {
                    console.log(each);
                    return (
                        <>
                            <tr>
                                <th scope="row">{each.id}</th>
                                <td>{each.name}</td>
                                <td><img src={each.image} width={100} height={100} alt=""/></td>
                                <td>{each.cuisine}</td>
                                <td><OrderList list={each.ingredients}/></td>
                                <td><OrderList list={each.instructions}/></td>
                                <td><button><Link to={`/recipe/${each.cuisine}/${each.id}`}>SeeMore</Link></button></td>
                            </tr>
                        </>
                    );
                })
            }
            </>
        }
        </>
    )
}
export default RecipePage;