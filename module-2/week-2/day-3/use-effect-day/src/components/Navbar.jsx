import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export const Navbar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-characters">All Characters</NavLink>
      <NavLink to="/random-quote">Random Quote</NavLink>
      <NavLink to="/products">All Products</NavLink>
      <NavLink to="/recipe-list">All Recipes</NavLink>
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </button>
    </nav>
  );
};
