import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HQ978LsBSFX363lQwwT2iHuk1FOlNVOnZvMfiz4yQVKSA4cnXD5BX0wJuqCVN1Uf7tfxbqV2BKTQOsuaYEnajJv00J60c5CbR");

function App() {
  const [{}, dispatch] = useStateValue();
  //listener to keep track o who's signed in
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in or was logged in
        //on refreshing the page firebase logs me in again even if i was logged in from before
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  //this useEffect runs only once everytime the app component loads because we haven't given any pther condition
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              {/* these are called the higher order functions */}
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;