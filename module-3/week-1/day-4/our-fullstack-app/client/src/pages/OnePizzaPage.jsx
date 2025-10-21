import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const OnePizzaPage = () => {
  const [onePizza, setOnePizza] = useState({});
  const { pizzaId } = useParams();
  useEffect(() => {
    async function getOnePizza() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/pizza/single-pizza/${pizzaId}`
        );
        console.log(data);
        setOnePizza(data);
      } catch (error) {
        console.error(error);
      }
    }
    getOnePizza();
  }, [pizzaId]);
  return (
    <div>
      <h1>{onePizza.title}'s Page</h1>
      <img src={onePizza.image} alt={onePizza.title} />
    </div>
  );
};
