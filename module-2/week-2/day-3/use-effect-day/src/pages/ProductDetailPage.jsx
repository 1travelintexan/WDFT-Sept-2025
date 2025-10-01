import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const [productState, setProductState] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function getOneProduct() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        console.log(data);
        setProductState(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  async function handleDelete() {
    //inside the handle delete, we make a delete request
    try {
      const { data } = await axios.delete(
        `https://dummyjson.com/products/${productId}`
      );
      console.log("product deleted", data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>{productState.title}'s Detail Page</h2>
      <img src={productState.thumbnail} alt={productState.title} />
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/product/edit/${productId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
