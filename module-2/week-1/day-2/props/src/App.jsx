import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ragnarImg from "./assets/ragnar.png";
import samImg from "./assets/sam.png";
import kukuImg from "./assets/kuku.png";
import PetCard from "./components/PetCard";
import { User } from "./components/User";
//this is the import for default export

function App() {
  const petsArray = [
    {
      name: "Ragnar",
      age: 5,
      picture: ragnarImg,
    },
    {
      name: "Sam",
      age: 5,
      picture: samImg,
    },
    {
      name: "Kuku",
      age: 5,
      picture: kukuImg,
    },
  ];

  const currentUser = {
    userName: "Joshua",
    userAge: 38,
    image: ragnarImg,
  };

  return (
    <>
      {/* sending props to the Navbar component  */}
      <Navbar pet="pet" />
      <main>
        <PetCard onePet={petsArray[1]} />
        <User user={currentUser} />
      </main>
      <Footer onePet={petsArray[0]} />
    </>
  );
}

export default App;
