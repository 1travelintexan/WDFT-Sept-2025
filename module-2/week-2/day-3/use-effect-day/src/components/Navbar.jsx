import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-characters">All Characters</NavLink>
      <NavLink to="/random-quote">Random Quote</NavLink>
      <NavLink to="/products">All Products</NavLink>
      <NavLink to="/recipe-list">All Recipes</NavLink>
    </nav>
  );
};
