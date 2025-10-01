import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getAllProducts() {
      try {
        //with fetch
        // const response = await fetch("https://fakestoreapi.com/products");
        // const data = await response.json();
        // console.log(data);

        //with axios
        const { data } = await axios("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="product-card">
              <img src={oneProduct.image} />
              <h5>{oneProduct.title}</h5>
              <p>{oneProduct.category}</p>
              <p>${oneProduct.price}</p>
              <p>{oneProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
