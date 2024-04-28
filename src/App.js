import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <button className="button" onClick={handleIncrement}>
        +
      </button>
      <h2>{count}</h2>
      <button className="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
