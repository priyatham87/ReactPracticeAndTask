import  { useState } from "react";
import ChildComponent from "./child";

function ToggleFunction() {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log("parent re-render");
  

  

  const themeHandler = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div>
      <button onClick={themeHandler}>Change theme</button>
      <ChildComponent></ChildComponent>
    </div>
  );
}

export default ToggleFunction;