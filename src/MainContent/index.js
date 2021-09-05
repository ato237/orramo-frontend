import React from "react";
import Calculator from "../Calculator";
import { MainContentContainer, MainContentTitle,MainContentHeading } from "./MainContent";
const MainContent = () => {
  return (
    <>
      <MainContentContainer >
        <MainContentTitle>Calculate Charges</MainContentTitle>
        <MainContentHeading>
          Calculate mobile money Charges Fast and easily using Orramo's
          simplified Calculator
        </MainContentHeading>
        <Calculator/>
      </MainContentContainer>
    </>
  );
};

export default MainContent;
