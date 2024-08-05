import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { DataContext } from "../App";
import { RecipeContext } from "../navigations/navigation";

const NavBar = () => {
  const{darkMode}=useContext(DataContext)
  const{favouriteRecipe}=useContext(RecipeContext)
  const linkStyle = { margin: 10, textDecoration: "none",display:"flex"};
  return (
    <nav className={`navbar navbar-expand-sm bg-${darkMode ? "dark" : "light"} navbar-dark`}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"} style={linkStyle}>
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/blog"} style={linkStyle}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} style={linkStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/settings"} style={linkStyle}>
              Setting
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/user"} style={linkStyle}>
              user
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/user/admin"} style={linkStyle}>
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/recipe"} style={linkStyle}>
              Recipe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/dropdown"} style={linkStyle}>
              DropDownList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/recipedropdown"} style={linkStyle}>
              RecipeDropDown
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/usereducer"} style={linkStyle}>
              UseReducerTicketBooking
            </NavLink>
          </li>
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;