import "./styles/App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {useEffect} from "react";
import firebase from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
