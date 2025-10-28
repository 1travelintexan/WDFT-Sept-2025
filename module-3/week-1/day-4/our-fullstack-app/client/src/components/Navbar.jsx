import { useContext } from "react";
import ourLogo from "../assets/kuku.png";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/profile">
        <img src={ourLogo} alt="kuku" />
      </Link>
      <Link to="/map">
        <button>See Map</button>
      </Link>
      <h2>Our Fullstack App</h2>
      <Link to="/create-a-pizza">
        <button>Create a Pizza</button>
      </Link>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
