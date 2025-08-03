import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const sayWelcome = () => {
    alert("welcome");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Converting ${amount} to ${currency}`);
  };

  return (
    <div className="app-container">
      <div className="counter">{count}</div>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={sayWelcome}>Say welcome</button>
        <button onClick={() => alert('Clicked!')}>Click on me</button>
      </div>

      <h1 className="title">Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit} className="currency-form">
        <div className="form-row">
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Currency:</label>
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
