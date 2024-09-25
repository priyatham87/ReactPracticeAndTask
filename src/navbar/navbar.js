import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";

import { RecipeContext } from "../navigations/navigation";

const NavBar = () => {
  
  const{favouriteRecipe}=useContext(RecipeContext)
  const linkStyle = { margin: 10, textDecoration: "none",display:"flex"};
  return (
    <nav className="navbar navbar-expand-sm navbar-dark custom-navbar">
  <div className="container-fluid">
    <ul className="navbar-nav flex-nav">
      <li className="nav-item start">
        <NavLink to={"/recipemaker"} style={linkStyle}>
          RecipeMaker
        </NavLink>
      </li>
      <li className="nav-item center">
        <NavLink to={"/favouriterecipes"} style={linkStyle}>
          FavouriteRecipes {favouriteRecipe.length}
        </NavLink>
      </li>
      <li className="nav-item end">
        <NavLink to={"/viewRecipes"} style={linkStyle}>
          ViewRecipes
        </NavLink>
      </li>
    </ul>
  </div>
</nav>

  
  );
};

export default NavBar;