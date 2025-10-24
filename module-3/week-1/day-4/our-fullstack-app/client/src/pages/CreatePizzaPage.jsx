import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreatePizzaPage = () => {
  const [title, setTitle] = useState("");
  const [directions, setDirections] = useState("");
  const { currentUser } = useContext(AuthContext);
  const nav = useNavigate();
  async function handleCreatePizza(e) {
    e.preventDefault();
    try {
      //new version with cloudinary
      const image = e.target.image.files[0];
      const ourFormData = new FormData();
      ourFormData.append("imageUrl", image);
      ourFormData.append("title", title);
      ourFormData.append("directions", directions);
      ourFormData.append("creator", currentUser._id);

      const { data } = await axios.post(
        "http://localhost:5005/pizza/create-a-pizza",
        ourFormData
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
          <input type="file" name="image" />
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
