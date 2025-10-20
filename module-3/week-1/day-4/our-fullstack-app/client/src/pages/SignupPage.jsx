import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();
  async function handleSignupUser(e) {
    e.preventDefault();
    const userToCreate = { username, email, password };
    try {
      const createdUser = await axios.post(
        "http://localhost:5005/auth/signup",
        userToCreate
      );
      console.log("user signup up! nice work", createdUser);
      nav("/login");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h2>Signup With Us</h2>
      <form onSubmit={handleSignupUser}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
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
        <button>Sign Up!</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Already a member?</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
