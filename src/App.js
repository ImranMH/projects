import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Home from './home/Index'
import Corona from './corona/Corona'
import { ExpenseTracker, LoveCalculator } from './components/app'
import Contact from './contact/Index.js'
import { AdsManager, Card, Login, Modal, UserList } from './components/css-examples'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/app/corona">
          <Corona />
        </Route>
        <Route path="/app/expense-tcr">
          <ExpenseTracker />
        </Route>
        <Route path="/app/lovecalculator">
          <LoveCalculator />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/css-example/ads-managers">
          <AdsManager />
        </Route>
        <Route path="/css-example/card">
          <Card />
        </Route>
        <Route path="/css-example/login">
          <Login />
        </Route>
        <Route path="/css-example/modal">
          <Modal />
        </Route>
        <Route path="/css-example/userlist">
          <UserList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
