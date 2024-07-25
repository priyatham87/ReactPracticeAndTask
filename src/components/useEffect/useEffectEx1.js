import { useEffect, useState } from "react";
import { greetingFn } from "../greetingfun/greeting";
import axios from "axios";
const UseEffectEx1 = () => {
  const [greeting, setGreeting] = useState("");

  const [recipe, setRecipe] = useState([]);

  const [count, setCount] = useState(0);

  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("useEffect Executed");

    greetingHandler();

    document.title = "useEffect";

    fetchRecipe();

    // window.addEventListener("mousemove",mouseMove)
  }, []);

  useEffect(()=>{
    console.log("useEffect2 Exected...Age or Count Incresed");
  },[count, age])//if we not mention dependency array[] useEffect prints infinite

  // const mouseMove=()=>{
  //   console.log("mouse moving");
  // }

  const countHandler = () => {
    setCount(count + 1);
  };

  const ageHandler = () => {
    setAge(age + 1);
  };

  const greetingHandler = () => {
    const wishes = greetingFn;
    setGreeting(wishes);
  };

  const fetchRecipe = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        const newData = data.recipes;
        setRecipe(newData);
      }
    } catch (err) {}
  };
  return (
    <>
      <h2>UseEffectExample1</h2>
      <h3>Hi PSP {greeting}</h3>
      {recipe.map((each) => {
        return (
          <div key={each.id}>
            <h3>{each.name}</h3>
            <img src={each.image} alt={"not found"} width={100} height={100} />
          </div>
        );
      })}
      <button onClick={countHandler}>count is {count}</button>
      <button onClick={ageHandler}>Age is {age}</button>
    </>
  );
};
export default UseEffectEx1;
