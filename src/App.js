import "./styles/App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <h1>Checkout page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
