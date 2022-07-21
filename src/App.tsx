import React from 'react';
import { useCounter } from "./features/counter"

function App() {

  const { counter, showCounter, increment, decrement, toggle } = useCounter()

  return (
    <div style={{
      padding: "50px",
      display: 'flex',
      flexDirection: 'column',
      
    }}>
      {
        showCounter ? <h4>{counter}</h4> : ""
      }
        <div style={{
          padding: "10px"
        }}>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={toggle}>toggle</button>
        </div>
    </div>
  );
}

export default App;
