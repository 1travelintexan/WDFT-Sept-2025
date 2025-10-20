import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContentWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();
  //fuction that takes the authToken from the local storage and verifies it
  async function authenticateUser() {
    const theToken = localStorage.getItem("authToken");
    try {
      const { data } = await axios.get("http://localhost:5005/auth/verify", {
        headers: { authorization: `Bearer ${theToken}` },
      });
      console.log("token valid! You are now verified :)", data);
      setCurrentUser(data.currentUser);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setCurrentUser({});
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }
  function handleLogout() {
    //remove the token from local storage
    localStorage.removeItem("authToken");
    //navigate to '/login' page
    nav("/login");

    //set all states back to original form when you logout
    setCurrentUser({});
    setIsLoading(false);
    setIsLoggedIn(false);
  }
  //useEffect to be called on every refresh of the page for the whole app
  useEffect(() => {
    setTimeout(() => {
      authenticateUser();
    }, 2000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        isLoggedIn,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContentWrapper };
