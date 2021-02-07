import "./App.css";
import { useState, useEffect } from "react";
let born = false;
function App() {
  // state variable
  const [growth, updateGrowth] = useState(0);
  const [nirvana, updateNirvana] = useState(false);
  // button click handler
  function handleGrowthButtonClick() {
    updateGrowth(growth + 10);
  }

  // Pass a state varible in second parameter array
  useEffect(() => {
    console.log("Current Niravana value", nirvana, growth);
    document.title = "Nirvana attained";
  }, [nirvana]);
  // Empty array as a second parameter
  // Runs only during component creation
  useEffect(() => {
    // console.log("Component is born", growth);
    document.title = "Component Born";
  }, []);

  // Nothing passed as a second parameter
  // useEffect hook will run every time any change occurs in component
  useEffect(() => {
    if (born === true) {
      if (growth > 60) {
        updateNirvana(true);
      } else {
        document.title = "Component is growing";
      }
    } else {
      born = true;
    }
  });
  // rendering code
  return (
    <div className="App">
      <header className="App-header">
        <h3>{growth} years</h3>
        <button onClick={() => handleGrowthButtonClick()}>
          <h4>Update growth</h4>
        </button>
      </header>
    </div>
  );
}

export default App;
