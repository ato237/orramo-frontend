import React from "react";
import Calculator from "../Calculator";
import { MainContentContainer, MainContentTitle,MainContentHeading, Update } from "./MainContent";
const MainContent = () => {
  return (
    <>
      <MainContentContainer >
        <MainContentTitle>Mobile Money Charges Calculator</MainContentTitle>
        <MainContentHeading>
          Calculate mobile money Charges Fast and easily using Orramo's
          simplified Calculator
        </MainContentHeading>
        <Update>Update! Taxes have been included in every transaction for MOMO and OM only</Update>
        <Calculator/>
      </MainContentContainer>
    </>
  );
};

export default MainContent;
