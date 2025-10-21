import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { RouteProtector } from "./components/RouteProtector";
import Navbar from "./components/Navbar";
import { AllPizzasPage } from "./pages/AllPizzasPage";
import { OnePizzaPage } from "./pages/OnePizzaPage";
import { CreatePizzaPage } from "./pages/CreatePizzaPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pizzas" element={<AllPizzasPage />} />
        <Route path="/one-pizza/:pizzaId" element={<OnePizzaPage />} />
        <Route path="/create-a-pizza" element={<CreatePizzaPage />} />
        <Route
          path="/profile"
          element={
            <RouteProtector>
              <ProfilePage />
            </RouteProtector>
          }
        />
      </Routes>
    </>
  );
}

export default App;
