import React from "react";
import DropDown from "./DropDown";

export default function Navbar({
  currentGame,
  handleGameChange,
  gameSet,
  score,
  bestScore,
}) {
  return (
    <nav>
      <DropDown
        currentGame={currentGame}
        handleGameChange={handleGameChange}
        gameSet={gameSet}
      />
      <h2>Memory Card Game</h2>
      <p>
        Get points by clicking on an image but don't click on any image more
        than once!
      </p>
      <div>
        Current score: {score} Best score in this game: {bestScore}
      </div>
    </nav>
  );
}
