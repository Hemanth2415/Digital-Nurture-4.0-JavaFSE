import React, { useState } from 'react';
import './App.css';

function LoginButton({ onClick }) {
  return <button className="btn" onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button className="btn" onClick={onClick}>Logout</button>;
}

function UserGreeting() {
  return <h1 className="black-text">Welcome back</h1>;
}

function GuestGreeting() {
  return <h1 className="black-text">Please sign up.</h1>;
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={() => setIsLoggedIn(false)} />
      ) : (
        <LoginButton onClick={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
