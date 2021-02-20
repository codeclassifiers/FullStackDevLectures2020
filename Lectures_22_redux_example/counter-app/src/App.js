import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { CharacterList } from "./features/characterList/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
