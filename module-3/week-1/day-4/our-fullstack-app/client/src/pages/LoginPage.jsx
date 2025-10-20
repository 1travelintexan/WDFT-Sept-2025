import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const { authenticateUser } = useContext(AuthContext);
  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = { email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/login",
        userToLogin
      );
      console.log("You logged in! Nice work!", data);
      //this adds the authToken to the local storage of the Browser
      localStorage.setItem("authToken", data.authToken);
      //before navigating, call the authenticate user function
      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button>Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>New here?</p>
      <Link to="/">Sign Up</Link>
    </div>
  );
};
