import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProductPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const { productId } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    async function getProductDetails() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setTitle(data.title);
        setPrice(data.price);
        setThumbnail(data.thumbnail);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductDetails();
  }, [productId]);

  async function handleUpdateProduct(e) {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      thumbnail,
    };
    try {
      const { data } = await axios.put(
        `https://dummyjson.com/products/${productId}`,
        updatedProduct
      );
      console.log("product updated", data);
      nav("/products");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <label>
          Product Title:
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <label>
          Product Image:
          <input
            type="text"
            placeholder="Image URL"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
