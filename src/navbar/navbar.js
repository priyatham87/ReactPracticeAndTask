import { Link,NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const linkStyle = { margin: 10, textDecoration: "none",display:"flex"};
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
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
            <NavLink to={"/jokegenerator"} style={linkStyle}>
            JokeGenerator
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;