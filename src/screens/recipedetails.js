import { useParams } from "react-router-dom";
import NavBar from "../navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderList from "../list/orderlist";


// import Spinner from "../spinners/spinner";

const RecipeDetails = () => {
  const urlparams = useParams();
  console.log(urlparams);

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetchRecipe();
  }, [urlparams.recipeId]);

  const fetchRecipe = async () => {
    try {
      const { status, data } = await axios.get(
        `https://dummyjson.com/recipes/${urlparams.recipeId}`
      );
      if (status === 200) {
        setRecipe(data);
      }
    } catch (err) {}
  };
  return (
    <>
      <NavBar />
      <h2>Recipe Details!!!</h2>
      {Object.keys(recipe).length > 0 ? (
        <>
          <tr>
            <th scope="row">{recipe.id}</th>
            <td>{recipe.name}</td>
            <td>
              <img src={recipe.image} width={200} height={200} alt="" />
            </td>
            <td>{recipe.cuisine}</td>
            <td>
              <OrderList list={recipe.ingredients} />
            </td>
            <td>
              <OrderList list={recipe.instructions} />
            </td>
           <p>{recipe.rating}</p>
          </tr>
        </>
      ) : (
        <>
        <h2>page loading!!!!</h2>
          {/* <Spinner/> */}
        </>
      )}
    </>
  );
};
export default RecipeDetails;
