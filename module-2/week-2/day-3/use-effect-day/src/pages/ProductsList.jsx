import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OurSpinner } from "../components/OurSpinner";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, []);

  if (products.length === 0) {
    return <OurSpinner />;
  }

  return (
    <div>
      <h2>Products</h2>
      <Link to="/add-a-product">
        <button>Add a Product</button>
      </Link>
      <section id="character-page">
        {products.map((oneProduct) => {
          return (
            <Link
              key={oneProduct.id}
              to={`/products/detail/${oneProduct.id}`}
              className="character-card"
            >
              <div>
                <img alt={oneProduct.title} src={oneProduct.thumbnail} />
                <p>{oneProduct.title}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
