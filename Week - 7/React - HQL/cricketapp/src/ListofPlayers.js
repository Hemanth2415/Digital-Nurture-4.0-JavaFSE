import React from 'react';
const players = [
  { name: 'Virat', score: 95 },
  { name: 'Rohit', score: 88 },
  { name: 'Rahul', score: 67 },
  { name: 'Jadeja', score: 71 },
  { name: 'Pant', score: 62 },
  { name: 'Ashwin', score: 56 },
  { name: 'Hardik', score: 74 },
  { name: 'Bumrah', score: 45 },
  { name: 'Gill', score: 85 },
  { name: 'Shreyas', score: 59 },
  { name: 'Kuldeep', score: 68 },
];

const players70 = players.filter((item) => item.score <= 70);
const ListofPlayers = () => {
  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>

      <h2>Players with Score ≤ 70</h2>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>{item.name} - {item.score}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListofPlayers;