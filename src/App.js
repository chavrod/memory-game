import "./index.css";

import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import { CARDS } from "./data/data.js";

import { useState } from "react";

function App() {
  const [currentGame, setCurrentGame] = useState(0);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardSelection = (cardId) => {
    setSelectedCardIds([...selectedCardIds, cardId]);
    if (selectedCardIds.includes(cardId)) {
      setScore(0);
      setSelectedCardIds([]);
      if (score > bestScore) setBestScore(score);
    } else {
      setScore((n) => n + 1);
    }
  };

  const handleGameChange = (game) => {
    setCurrentGame(game);
    setSelectedCardIds([]);
    setScore(0);
    setBestScore(0);
  };

  const gameSet = [0, 1];

  return (
    <div className="min-h-screen bg-emerald-200 font-mono">
      <Navbar
        currentGame={currentGame}
        handleGameChange={handleGameChange}
        gameSet={gameSet}
        score={score}
        bestScore={bestScore}
        cards={CARDS}
      />
      {score < CARDS[currentGame].length ? (
        <CardGrid
          currentGame={currentGame}
          cards={CARDS}
          handleCardSelection={handleCardSelection}
        />
      ) : (
        <Modal handleGameChange={handleGameChange} />
      )}
    </div>
  );
}

export default App;
