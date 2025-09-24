import "./App.css";
import ragnarImg from "./assets/ragnar.png";
import samImg from "./assets/sam.png";
import kukuImg from "./assets/kuku.png";
import harryImg from "./assets/harry.png";
import { useState } from "react";
import { PetCard } from "./components/PetCard";
function App() {
  const petsArray = [
    {
      id: 1,
      name: "Ragnar",
      age: 5,
      type: "Dog",
      picture: ragnarImg,
      premiumPet: false,
    },
    {
      id: 2,
      name: "Sam",
      age: 8,
      type: "Cat",
      picture: samImg,
      premiumPet: false,
    },
    {
      id: 3,
      name: "Kuku",
      age: 3,
      type: "Cat",
      picture: kukuImg,
      premiumPet: true,
    },
    {
      id: 4,
      name: "Harry",
      age: 2,
      type: "Snake",
      picture: harryImg,
      premiumPet: true,
    },
  ];
  //this is creating a state with a setter and a initial value
  const [count, setCount] = useState(0);
  const [petState, setPetState] = useState(petsArray);
  const n = 5;

  //create a function to add to the count
  function handleAddToCount() {
    setCount(count + 1);
    //more difficult way to set the state
    // setCount((prev) => {
    //   console.log("previous value", prev);
    //   return prev + 1;
    // });
  }

  function handleSubtractToCount() {
    //Paus solution
    // if (count <= 0) {
    //   return;
    // }
    if (count > 0) {
      setCount(count - n);
    }
  }

  function handleRemovePet(petId) {
    const filteredPets = petState.filter((pet) => {
      if (pet.id !== petId) {
        return true;
      }
    });
    console.log("remove clicked", petId, filteredPets);
    setPetState(filteredPets);
  }
  return (
    <>
      <h1>State Day</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + n)}>+</button>
      <button onClick={handleSubtractToCount}>-</button>
      {/* lets loop over the pets and show each name */}
      {petState.map((eachPet) => {
        return (
          <PetCard
            handleRemovePet={handleRemovePet}
            pet={eachPet}
            key={eachPet.id}
          />
        );
      })}
    </>
  );
}

export default App;
