import React from "react";
import Card from "./Card";

export default function CardGrid({ cards, currentGame, handleCardSelection }) {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledCards = shuffle(cards[currentGame]);

  return (
    <div>
      {shuffledCards.map((card) => (
        <Card
          key={card.id}
          cardId={card.id}
          name={card.wordPair}
          img={card.img}
          handleCardSelection={handleCardSelection}
        />
      ))}
    </div>
  );
}
