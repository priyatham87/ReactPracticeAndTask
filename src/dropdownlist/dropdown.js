import { useState } from "react";
import NavBar from "../navbar/navbar";

const DropDownList = () => {
  const [recipe, setRecipe] = useState("");

  const recipes = [
    {
      id: "1",
      name: "Biriyani",
    },
    {
      id: "2",
      name: "Friedrice",
    },
  ];

  const changeHandler = (event) => {
    setRecipe(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(recipe, "dish");
  };
  return (
    <>
    <NavBar/>
      <form onSubmit={submitHandler}>
        <select onChange={changeHandler}>
          {recipes.map((eachRecipe) => {
            return <option key={eachRecipe.id}>{eachRecipe.name}</option>;
          })}
        </select>
        <button>submit</button>
      </form>
    </>
  );
};
export default DropDownList;
