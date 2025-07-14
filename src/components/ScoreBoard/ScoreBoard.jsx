import { useState } from "react";
import "./ScoreBoard.css";

export const ScoreBoard = () => {
  const players = [
    { id: 1, name: "Mario", score: 10 },
    { id: 2, name: "Lucía", score: 15 },
    { id: 3, name: "David", score: 8 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const [classification, setClassification] = useState(sortedPlayers);

  const handleAddPoint = () => {
    setClassification((prevClassification) =>
      prevClassification.map((player, id) =>
        player.id === id ? { ...player, score: player.score + 1 } : player
      )
    );
  };

  return (
    <div>
      <h2>Tabla de puntuaciones</h2>
      <ul>
        {classification.map((player) => (
          <li key={player.id}>
            <span>
              {player.name} || {player.score} puntos
            </span>
            <span>
              <button onClick={() => handleAddPoint(player.id)}>+1</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
