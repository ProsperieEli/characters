import "./App.css";
import { useState } from "react";
import Picker from "./Components/Picker";
import Character from "./Components/Character";
import Display from "./Components/Display";

function App() {
  const [head, setHead] = useState("");
  const [middle, setMiddle] = useState("");
  const [bottom, setBottom] = useState("");
  const [newCatchPhrase, setNewCatchPhrase] = useState("");
  const [catchPhrase, setCatchPhrase] = useState([]);

  const handleClick = () => {
    setCatchPhrase((prevState) => [...prevState, newCatchPhrase]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Picker
          head={head}
          onHeadChange={setHead}
          middle={middle}
          onMiddleChange={setMiddle}
          bottom={bottom}
          onBottomChange={setBottom}
          newCatchPhrase={newCatchPhrase}
          setCatchphrase={setNewCatchPhrase}
          handleClick={handleClick}
        />
        <Display catchphrase={catchPhrase} />
        <Character />
      </header>
    </div>
  );
}

export default App;
