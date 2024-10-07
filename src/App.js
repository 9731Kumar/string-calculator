import "./App.css";
import { useState } from "react";
import { add } from "./utils/Utils";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(undefined);

  const handleOnCLick = (numbers) => {
    const value = add(numbers);
    setResult(value);
  };

  return (
    <div className="App">
      <h2>String Calculator</h2>
      <input
        name="input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => handleOnCLick(input)}>Submit</button>
      {result >= 0 && <div>The Value : {result}</div>}
    </div>
  );
}

export default App;
