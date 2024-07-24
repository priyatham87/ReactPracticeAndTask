import { useState } from "react";
import { greetingFn } from "../greetingfun/greeting";
const UseStateExample3 = () => {
  const [greeting, setGreeting] = useState("");
  

  const greetingHandler = () => {
    const wishes = greetingFn;
    setGreeting(wishes);
  };
  return (
    <>
      <h2>UseStateExample3</h2>
      <h3>Hi PSP {greeting}</h3>
      <button onClick={greetingHandler}>Wishes</button>
    </>
  );
};
export default UseStateExample3;
