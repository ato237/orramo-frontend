import React from "react";
import { MainContentContainer, MainContentTitle,MainContentHeading,ContentButton } from "./MainContentC";
const MainContent = ({navigation}) => {
  return (
    <>
      <MainContentContainer >
        <MainContentTitle>Orramo Currency Converter</MainContentTitle>
        <MainContentHeading>
          Current currency and crypto currency exchange rates. Fast and reliable service
        </MainContentHeading>
       {/* <Currency />*/}
        <h1 style={{fontSize: "50px", color: "white", textAlign:"center"}}>Available on our mobile app.</h1>
       <div style={{display:'flex', justifyContent:'center'}}>
       <ContentButton to = "/download"> 
          Download Now
        </ContentButton>
       </div>
       
      </MainContentContainer>
    </>
  );
};

export default MainContent;
