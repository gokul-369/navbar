import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import Marketing from "./Components/Pages/Marketing";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import Consulting from "./Components/Pages/Consulting";
import SignUp from "./Components/Pages/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/contact-us" exact component={ContactUs}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/marketing" exact component={Marketing}></Route>
        <Route path="/consulting" exact component={Consulting}></Route>
      </Switch>
    </Router>
  );
}

export default App;
