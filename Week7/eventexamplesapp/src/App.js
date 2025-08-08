import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (event) => {
    console.log(event); // React synthetic event
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Examples</h1>

      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>Say Welcome</h2>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>

      <h2>Synthetic Event</h2>
      <button onClick={(e) => handleSyntheticEvent(e)}>Click Me</button>

      <hr />

      <CurrencyConverter />
    </div>
  );
}

export default App;