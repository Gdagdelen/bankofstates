import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Register from "./register/Register";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Home from "./home/Home";
import Admin from "./admin/Admin";
import User from "./user/User";
import Deposit from "./deposit/Deposit";
import Withdraw from "./withdraw/Withdraw";
import AddRecipient from "./transfer/AddRecipient";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/logout"><Logout /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/user"><User /></Route>
          <Route path="/deposit"><Deposit /></Route>
          <Route path="/withdraw"><Withdraw /></Route>
          <Route path="/addRecipient"><AddRecipient /></Route>

          <Route path="/"><Home /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;