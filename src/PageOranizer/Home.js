import React from "react";
import MainContent from "../MainContent";
import Services from "../Service";
import ContentSection from "../ContentSection";
import Banner from "../Helper/Banner";

function Home() {
  return (
    <>
        <MainContent />
        <Services />
        <Banner/>
        <ContentSection />
    </>
  );
}

export default Home;
