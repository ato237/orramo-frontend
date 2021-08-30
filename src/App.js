import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./PageOranizer/Home";
import Download from "./Download";
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path ="/download" exact component ={Download}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
