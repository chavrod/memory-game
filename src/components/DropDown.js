import { useState } from "react";

export default function DropDown({ currentGame, handleGameChange, gameSet }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Choose another game?</button>
      {open ? (
        <ul>
          {gameSet.map((game) => (
            <li key={game}>
              <button
                onClick={() => handleGameChange(game)}
                className={`hover:bg-gray-200 ${
                  game === currentGame ? "bg-green-100" : ""
                }`}
              >
                Set #{game + 1}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
