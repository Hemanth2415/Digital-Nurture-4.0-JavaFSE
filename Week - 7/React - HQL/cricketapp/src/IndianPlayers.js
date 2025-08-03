import React from 'react';
import { OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = [
  'Fourth Player',
  'Fifth Player',
  'Sixth Player',
  'Seventh Player',
  'Eighth Player',
  'Ninth Player',
  'Tenth Player',
  'Eleventh Player',
];

const allPlayers = [...T20Players, ...RanjiTrophyPlayers]; // Total 11

export const IndianPlayers = () => {
  return (
    <div>
      <h2>All Indian Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <OddPlayers players={allPlayers} />
      <EvenPlayers players={allPlayers} />
    </div>
  );
};
