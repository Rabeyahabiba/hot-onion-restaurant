import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";


import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
       <div className="main">
       <Switch>
      <Header />
      <Banner/>
     
      <Footer />
     
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />

        </Route>
      </Switch>
     
      </div>
    </Router>
  );
}

export default App;
