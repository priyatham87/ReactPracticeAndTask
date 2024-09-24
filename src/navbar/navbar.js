import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";

import { RecipeContext } from "../navigations/navigation";

const NavBar = () => {
  
  const{favouriteRecipe}=useContext(RecipeContext)
  const linkStyle = { margin: 10, textDecoration: "none",display:"flex"};
  return (
    <nav className={`navbar navbar-expand-sm bg- navbar-dark`}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/recipemaker"} style={linkStyle}>
              RecipeMaker
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/favouriterecipes"} style={linkStyle}>
              FavouriteRecipes {favouriteRecipe.length}
            </NavLink>
          </li>
          <li className="nav-item">
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