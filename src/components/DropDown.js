import { useState } from "react";

export default function DropDown({ currentGame, handleGameChange, gameSet }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="bg-emerald-800 border rounded-t-lg border-emerald-900 p-1 text-white"
      >
        Different game?
      </button>
      {open ? (
        <ul className="bg-emerald-800 border rounded-b-lg border-emerald-900 p-1 text-white">
          {gameSet.map((game) => (
            <li key={game}>
              <button
                onClick={() => {
                  setOpen(!open);
                  handleGameChange(game);
                }}
                className={`text-m hover:bg-gray-200 ${
                  game === currentGame ? "bg-yellow-600" : ""
                }`}
              >
                Set #{game + 1} {game === currentGame ? "(current)" : ""}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
