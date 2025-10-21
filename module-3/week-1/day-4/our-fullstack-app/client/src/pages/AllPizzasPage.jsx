import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllPizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    async function getAllPizzas() {
      try {
        const { data } = await axios.get(
          "http://localhost:5005/pizza/all-pizzas"
        );
        console.log(data);
        setPizzas(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPizzas();
  }, []);

  return (
    <div>
      <h1>All the Pizzas</h1>
      {pizzas.map((onePizza) => {
        return (
          <div key={onePizza._id} className="pizza-card">
            <img src={onePizza.image} alt={onePizza.title} />
            <Link to={`/one-pizza/${onePizza._id}`}>
              <h3>{onePizza.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
