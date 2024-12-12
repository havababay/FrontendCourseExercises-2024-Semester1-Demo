import "./App.css";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useReducer((count1) => count1 + 1, 0);

  useEffect(() => {
    console.log(`Counter value is ${count}`);
  }, [count]);

  return (
    <div>
      <div>Counter value: {count1}</div>
      <button onClick={setCount1}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
