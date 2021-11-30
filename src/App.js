import "./App.css";
import { useState } from "react";
import Picker from "./Components/Picker";
import Character from "./Components/Character";

function App() {
  const [head, setHead] = useState("");
  const [middle, setMiddle] = useState("");
  const [bottom, setBottom] = useState("");
  const [input, setInput] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Picker />
        <Character />
      </header>
    </div>
  );
}

export default App;
