import React from "react";
import MainContent from "../MainContent";
import Services from "../Service";
import ContentSection from "../ContentSection";
import InfoSection from "../Info";

function Home() {
  return (
    <>
        <MainContent />
        <Services />
        <InfoSection/>
        <ContentSection />
    </>
  );
}

export default Home;
