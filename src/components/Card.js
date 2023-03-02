import React from "react";

export default function Card({ cardId, name, img, handleCardSelection }) {
  return (
    <div>
      {name}
      <button onClick={() => handleCardSelection(cardId)}>Click</button>
    </div>
  );
}
