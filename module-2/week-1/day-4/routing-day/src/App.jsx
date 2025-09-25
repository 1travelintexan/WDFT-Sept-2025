import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PetsPage } from "./pages/PetsPage";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import ragnarImg from "./assets/ragnar.png";
import samImg from "./assets/sam.png";
import kukuImg from "./assets/kuku.png";
import harryImg from "./assets/harry.png";
import { useState } from "react";
import { PetDetailPage } from "./pages/PetDetailPage";
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
  const [petState, setPetState] = useState(petsArray);
  return (
    <>
      <Navbar />
      <h1>Routing Day</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pets" element={<PetsPage petState={petState} />} />

        {/* //this is a dynamic route example */}
        <Route
          path="/one-pet/:petId"
          element={<PetDetailPage petState={petState} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
