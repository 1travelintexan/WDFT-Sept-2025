import { useContext } from "react";
import ourLogo from "../assets/kuku.png";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <img src={ourLogo} alt="kuku" />
      <h2>Our Fullstack App</h2>
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
