import React from "react";

export default function Card({ cardId, name, img, handleCardSelection }) {
  return (
    <div
      onClick={() => handleCardSelection(cardId)}
      className="flex flex-col items-center bg-emerald-800 border rounded-lg border-emerald-900 h-46 w-36"
    >
      <img src={img} alt={name} className="object-scale-down h-36 w-36"></img>
      <p className="break-words mb-2 mx-2 text-sm text-slate-200">
        <strong>{name}</strong>
      </p>
    </div>
  );
}
