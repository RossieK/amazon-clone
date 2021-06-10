import "./styles/App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Login from "./components/Login";
import {useEffect} from "react";
import firebase from "./firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51J0TKUIuZN0B8ENxWet17LQmfd0S4DjTOOyjJe1UMCAuExV7O1K5HPuZviFfqLNIiqVsTWkU3Rf5ZfqjHpTU5DmJ00b9ebI6kL");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
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
        <Route path="/payment" exact>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
