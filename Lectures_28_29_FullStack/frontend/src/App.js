import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Header } from "./components/Header";
import { GrocerySection } from "./components/GrocerySection";
import { RegistrationForm } from "./components/RegistrationForm";
import { LoginForm } from "./components/LoginForm";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/" component={GrocerySection} exact={true} />
          <PrivateRoute path="/home" component={GrocerySection} />
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
