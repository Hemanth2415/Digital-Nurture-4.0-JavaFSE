import React from 'react';

export function OddPlayers({ players }) {
  const oddPlayers = players.filter((_, index) => index % 2 === 0); // 0,2,4,...

  return (
    <div>
      <h3>Odd Team Players (1st, 3rd...)</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
