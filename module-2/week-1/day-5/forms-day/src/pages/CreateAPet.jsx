import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const CreateAPet = ({ petState, setPetState }) => {
  //each input gets a state
  const [petName, setName] = useState("");
  const [age, setAge] = useState(1);
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("other");
  const [premiumPet, setPremiumPet] = useState(true);
  //this variable is to navigate to different pages
  const nav = useNavigate();
  function handleAddPet(event) {
    //first thing is to stop the page from reloading
    event.preventDefault();
    //create one object with all the data
    const theNewPet = {
      id: uuidv4(),
      name: petName,
      age,
      picture,
      type,
      premiumPet,
    };
    console.log("submit called", theNewPet);

    //to  add a new pet to the pet state
    setPetState([theNewPet, ...petState]);
    // take the user to the all pets page
    nav("/pets");
  }

  return (
    <div className="form-page">
      <h2>Add your Pet</h2>
      <form onSubmit={handleAddPet}>
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
        <button>Add Pet</button>
      </form>
    </div>
  );
};
