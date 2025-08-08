import React from 'react';

const IndianPlayers = () => {
  const players = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  const oddPlayers = players.filter((_, i) => i % 2 === 0);
  const evenPlayers = players.filter((_, i) => i % 2 !== 0);

  const T20 = ['Mr. First Player', 'Mr. Second Player', 'Mr. Third Player'];
  const Ranji = ['Mr. Fourth Player', 'Mr. Fifth Player', 'Mr. Sixth Player'];
  const merged = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>
            {i === 0 ? 'First' : i === 1 ? 'Third' : 'Fifth'} : {p}
          </li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>
            {i === 0 ? 'Second' : i === 1 ? 'Fourth' : 'Sixth'} : {p}
          </li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {merged.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;