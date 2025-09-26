import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PetsPage } from "./PetsPage";

export const UpdatePetPage = ({ petState, setPetState }) => {
  const { petId } = useParams();
  const theOneSpecialPet = petState.find((pet) => {
    if (pet.id == petId) {
      return true;
    }
  });
  const nav = useNavigate();
  //states to control the inputs values
  const [petName, setName] = useState(theOneSpecialPet.name);
  const [age, setAge] = useState(theOneSpecialPet.age);
  const [picture, setPicture] = useState(theOneSpecialPet.picture);
  const [type, setType] = useState(theOneSpecialPet.type);
  const [premiumPet, setPremiumPet] = useState(theOneSpecialPet.premiumPet);

  function handleUpdatePet(e) {
    e.preventDefault();
    const updatedPet = {
      id: petId,
      name: petName,
      age,
      picture,
      type,
      premiumPet,
    };

    //find the updated pet in the original array and replace it
    const updatedPetArray = petState.map((onePet) => {
      if (onePet.id == petId) {
        return updatedPet;
      } else {
        return onePet;
      }
    });
    console.log({ updatedPet, petState, updatedPetArray });
    setPetState(updatedPetArray);
    nav("/pets");
  }

  return (
    <div className="form-page">
      <h2>Update Pet</h2>
      <form onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={petName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Pet Age:
          <input
            type="number"
            min={1}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <label>
          Pet Picture:
          <input
            type="text"
            value={picture}
            onChange={(e) => {
              setPicture(e.target.value);
            }}
          />
        </label>

        <label>
          Pet Type:
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="other">Other</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Snake">Snake</option>
          </select>
        </label>
        <label>
          Premium Pet:
          <input
            type="checkbox"
            checked={premiumPet}
            onChange={(e) => {
              setPremiumPet(e.target.checked);
            }}
          />
        </label>
        <button>Update Pet</button>
      </form>
    </div>
  );
};
