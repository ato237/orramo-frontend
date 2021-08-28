import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./MainContent";
import Services from "./Service";
import ContentSection from "./ContentSection";
import Banner from "./Helper/Banner";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContent />
        <Services />
        <Banner/>
        <ContentSection />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
