import React from "react";
import Currency from ".";
import { MainContentContainer, MainContentTitle,MainContentHeading } from "./MainContentC";
const MainContent = () => {
  return (
    <>
      <MainContentContainer >
        <MainContentTitle>Orramo Currency Converter</MainContentTitle>
        <MainContentHeading>
          Current currency and crypt-currency exchange rates. Fast and reliable service
        </MainContentHeading>
       {/* <Currency />*/}
        <h1 style={{fontSize: "50px", color: "white", textAlign:"center"}}>Coming soon</h1>

      </MainContentContainer>
    </>
  );
};

export default MainContent;
