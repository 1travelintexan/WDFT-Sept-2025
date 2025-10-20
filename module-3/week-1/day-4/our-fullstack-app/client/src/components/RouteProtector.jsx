import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const RouteProtector = ({ children }) => {
  console.log("inside the route protector");

  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};
