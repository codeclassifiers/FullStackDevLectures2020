import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Homepage";
import { AboutUs } from "./components/AboutUs";
import { Character } from "./components/Character";
import { CharacterInformation } from "./components/CharacterInformation";
import "./App.css";

/**
 * Step 1: Import Browser Router in top level of App component
 * Step 2: Import Route and specify addresses for individual components
 * Step 3: Import Switch to prevent mixing of component
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/character" component={Character} exact />
          <Route
            path="/character/:characterId"
            component={CharacterInformation}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
