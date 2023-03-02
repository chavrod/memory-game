import "./index.css";

import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import { CARDS } from "./data/data.js";

import { useState } from "react";

function App() {
  const [currentGame, setCurrentGame] = useState(0);

  const gameSet = [0, 1, 2, 3];

  return (
    <div>
      <Navbar
        currentGame={currentGame}
        handleGameChange={(e) => setCurrentGame(e)}
        gameSet={gameSet}
      />
      <CardGrid currentGame={currentGame} cards={CARDS} />
    </div>
  );
}

export default App;
