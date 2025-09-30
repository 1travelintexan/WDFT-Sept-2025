import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AllCharactersPage } from "./pages/AllCharactersPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { Navbar } from "./components/Navbar";
import { RandomQuotePage } from "./pages/RandomQuotePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
function App() {
  return (
    <>
      <Navbar />
      <h1>Use Effect Day</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-characters" element={<AllCharactersPage />} />
        <Route
          path="/one-character/:characterId"
          element={<CharacterDetailPage />}
        />
        <Route path="/random-quote" element={<RandomQuotePage />} />
        <Route path="/recipe-list" element={<RecipeListPage />} />
        <Route path="/one-recipe/:recipeId" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
