import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProductPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");

  const nav = useNavigate();
  async function handleAddProduct(e) {
    e.preventDefault();
    try {
      const productToAdd = {
        title,
        price,
        thumbnail,
      };
      //axios post example
      //   const { data } = await axios.post(
      //     "https://dummyjson.com/products/add",
      //     productToAdd
      //   );

      //fetch post example
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToAdd),
      });
      const data = await response.json();
      console.log(data);
      nav("/products");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Product Title:
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>
        <label>
          Product Image:
          <input
            type="text"
            placeholder="Image URL"
            value={thumbnail}
            onChange={(event) => {
              setThumbnail(event.target.value);
            }}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
