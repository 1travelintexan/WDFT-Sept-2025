import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [profileUser, setProfileUser] = useState({});
  const [userPizzas, setUserPizzas] = useState([]);
  //get data from the context
  //first destructure it from the context you want it
  const { currentUser } = useContext(AuthContext);
  // console.log("on the profile page", currentUser);

  useEffect(() => {
    async function getProfileUserData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUser._id}`
        );
        const userPizzas = await axios.get(
          `http://localhost:5005/pizza/users-pizzas/${currentUser._id}`
        );
        setUserPizzas(userPizzas.data);
        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUserData();
  }, [currentUser._id]);

  async function handleDeletePizza(pizzaId) {
    console.log("delete clicked", pizzaId);
    try {
      const { data } = await axios.delete(
        `http://localhost:5005/pizza/delete-a-pizza/${pizzaId}`
      );
      console.log("pizza deleted", data);

      //make sure to set the state to be missing the one you deleted
      const filteredPizzas = userPizzas.filter((pizza) => {
        if (pizza._id !== pizzaId) {
          return true;
        }
      });
      setUserPizzas(filteredPizzas);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{profileUser.username}'s ProfilePage</h1>
      <Link to="/pizzas">All Pizzas</Link>
      <h3>Your Pizzas:</h3>
      {userPizzas.map((onePizza) => {
        return (
          <div key={onePizza._id} className="pizza-card">
            <img src={onePizza.image} alt={onePizza.title} />
            <Link to={`/one-pizza/${onePizza._id}`}>
              <h3>{onePizza.title}</h3>
            </Link>
            <button onClick={() => handleDeletePizza(onePizza._id)}>
              Delete
            </button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default ProfilePage;
