import React from "react";
import DropDown from "./DropDown";

export default function Navbar({ currentGame, handleGameChange, gameSet }) {
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
      <div>Current score: 0 Best score in this game: 0</div>
    </nav>
  );
}
