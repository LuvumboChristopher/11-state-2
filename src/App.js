import React,{useState} from 'react';
import './style.css';

export default function App() {
  // This is a react hooks 👇🏻
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter with Hook State</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
