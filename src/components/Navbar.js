import React from "react";
import DropDown from "./DropDown";

export default function Navbar({
  currentGame,
  handleGameChange,
  gameSet,
  score,
  bestScore,
  cards,
}) {
  return (
    <nav className="sticky top-0 z-50 bg-emerald-400 mb-5 p-2 shadow-2xl rounded-b-lg">
      <h2 className="text-2xl text-center">Memory Card Game</h2>
      <p className="text-xs text-center">
        Get points by clicking on an image but don't click on any image more
        than once!
      </p>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex text-sm gap-2">
        <DropDown
          currentGame={currentGame}
          handleGameChange={handleGameChange}
          gameSet={gameSet}
        />
        <div>
          Current score:{" "}
          <span className="text-yellow-900 bg-white rounded-lg">{score}</span>
          <br></br>
          Best score in this game:{" "}
          <span className="text-green-900 bg-white rounded-lg">
            {bestScore}
          </span>{" "}
          (Max score:
          {cards[currentGame].length})
        </div>
      </div>
    </nav>
  );
}
