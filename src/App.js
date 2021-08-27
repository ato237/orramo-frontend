import React from "react";
import Apitest from "./Apitest";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContent/>
      </Router>
    </>
  );
}

export default App;
