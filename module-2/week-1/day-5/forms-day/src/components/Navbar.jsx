import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about?coolestPetName=Ragnar">About</NavLink>
      <NavLink to="/create-a-pet">Add a Pet</NavLink>
      <NavLink to="/pets">See the Pets</NavLink>
    </nav>
  );
};
