import React from 'react';
import sr from './office.jpeg';
import './App.css';

function App() {
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  const rentColorClass = ItemName.Rent <= 60000 ? 'textRed' : 'textGreen';

  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={rentColorClass}>Rent: ₹{ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
