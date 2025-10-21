import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreatePizzaPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [directions, setDirections] = useState("");
  const { currentUser } = useContext(AuthContext);
  const nav = useNavigate();
  async function handleCreatePizza(e) {
    e.preventDefault();
    try {
      const thePizzaToCreate = {
        title,
        image,
        directions,
        creator: currentUser._id,
      };
      const { data } = await axios.post(
        "http://localhost:5005/pizza/create-a-pizza",
        thePizzaToCreate
      );
      console.log("pizza created! nice work :)", data);
      nav("/pizzas");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Create your dream Pizza</h2>
      <form onSubmit={handleCreatePizza}>
        <label>
          Pizza Title:
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Pizza Image:
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Pizza Directions:
          <input
            type="text"
            value={directions}
            onChange={(e) => {
              setDirections(e.target.value);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
