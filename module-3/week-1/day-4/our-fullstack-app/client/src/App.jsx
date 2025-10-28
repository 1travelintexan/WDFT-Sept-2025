import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { RouteProtector } from "./components/RouteProtector";
import { AllPizzasPage } from "./pages/AllPizzasPage";
import { OnePizzaPage } from "./pages/OnePizzaPage";
import { CreatePizzaPage } from "./pages/CreatePizzaPage";
import { OurOutlet } from "./components/OurOutlet";
import MyMap from "./components/MyMap";
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/map"
            element={
              <OurOutlet>
                <MyMap />
              </OurOutlet>
            }
          />
          <Route
            path="/pizzas"
            element={
              <OurOutlet>
                <AllPizzasPage />
              </OurOutlet>
            }
          />
          <Route
            path="/one-pizza/:pizzaId"
            element={
              <OurOutlet>
                <OnePizzaPage />
              </OurOutlet>
            }
          />
          <Route
            path="/create-a-pizza"
            element={
              <OurOutlet>
                <CreatePizzaPage />
              </OurOutlet>
            }
          />
          <Route
            path="/profile"
            element={
              <RouteProtector>
                <OurOutlet>
                  <ProfilePage />
                </OurOutlet>
              </RouteProtector>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
