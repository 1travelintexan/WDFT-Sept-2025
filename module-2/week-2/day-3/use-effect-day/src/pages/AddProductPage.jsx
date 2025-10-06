import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProductPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const nav = useNavigate();
  async function handleAddProduct(e) {
    e.preventDefault();
    try {
      //first create a form data
      const ourFormData = new FormData();
      ourFormData.append("file", image);
      ourFormData.append("upload_preset", "ironhack");
      ourFormData.append("cloud_name", "dnkyulofa");
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dnkyulofa/image/upload",
        ourFormData
      );
      console.log(data.secure_url);
      const productToAdd = {
        title,
        price,
        thumbnail: data.secure_url,
      };
      // //axios post example
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        productToAdd
      );

      //fetch post example
      // const response = await fetch("https://dummyjson.com/products/add", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(productToAdd),
      // });
      // const data = await response.json();
      console.log(response.data);
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
        {/* <label>
          Product Image:
          <input
            type="text"
            placeholder="Image URL"
            value={thumbnail}
            onChange={(event) => {
              setThumbnail(event.target.value);
            }}
          />
        </label> */}
        <label>
          Product Image:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
