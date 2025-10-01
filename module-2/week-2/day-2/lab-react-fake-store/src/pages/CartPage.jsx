import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    async function getCart() {
      const arrayOfCartProducts = [];
      try {
        const { data } = await axios("https://fakestoreapi.com/carts/3");
        console.log("cart data", data);
        for (let i = 0; i < data.products.length; i++) {
          const currProduct = data.products[i];
          const response = await axios(
            `https://fakestoreapi.com/products/${currProduct.productId}`
          );
          response.data.quantity = data.products[i].quantity;
          arrayOfCartProducts.push(response.data);
        }
        console.log(arrayOfCartProducts);
        let ourTotal = 0;
        arrayOfCartProducts.forEach((product) => {
          ourTotal += product.price * product.quantity;
        });
        console.log(ourTotal);
        setGrandTotal(ourTotal.toFixed(2));
        setCartProducts(arrayOfCartProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  return (
    <div>
      <h1>Cart Page</h1>
      {cartProducts.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="cart-product-card">
              <img src={oneProduct.image} />
              <h5>{oneProduct.title}</h5>
              <p>{oneProduct.category}</p>
              <p>${oneProduct.price}</p>
            </div>
            <p>Quantity: {oneProduct.quantity}</p>
            <p>Subtotal: {oneProduct.price * oneProduct.quantity}</p>
          </Link>
        );
      })}

      <h2>Grand Total: $ {grandTotal}</h2>
    </div>
  );
};
