import React from 'react';
export function EvenPlayers({ players }) {
  const evenPlayers = players.filter((_, index) => index % 2 !== 0); // 1,3,5,...
  return (
    <div>
      <h3>Even Team Players (2nd, 4th...)</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
