import "./App.css";

import Confetti from "react-confetti";
function App() {
  function add(a, b) {
    return a + b;
  }
  const user = "Ragnar";
  console.log(user, add(2, 3));

  return (
    <div>
      <Confetti
        width={1300}
        height={500}
        numberOfPieces={2000}
        colors={["#1e73eaaa", "#ffffffaa"]}
      />
      <h1>this is {user}'s app now</h1>
    </div>
  );
}

export default App;
