import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    async function getOneProduct() {
      // try {
      //   //with axios with async and await
      //   // const { data } = await axios(
      //   //   `https://fakestoreapi.com/products/${productId}`
      //   // );
      //   //with fetch with async and await
      //   const response = await fetch(
      //     `https://fakestoreapi.com/products/${productId}`
      //   );
      //   const data = await response.json();
      //   console.log(data);
      //   setProduct(data);
      // } catch (error) {
      //   console.log(error);
      // }
      //fetch with .then and .catch
      // fetch(`https://fakestoreapi.com/products/${productId}`)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setProduct(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      //axios with .then and .catch
      axios(`https://fakestoreapi.com/products/${productId}`)
        .then(({ data }) => {
          setProduct(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOneProduct();
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img alt={product.title} src={product.image} />
      <h2>{product.title}</h2>
    </div>
  );
}

export default ProductDetailsPage;
