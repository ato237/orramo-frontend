import styled from "styled-components";

export const CalculatorContainer = styled.div`
  padding: 20px;
    padding-left: 200px;
    padding-right: 200px;
    z-index: 55;
  @media screen and (max-width: 1150px){
      transition: 0.2s ease-in-out;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 650px){
      transition: 0.2s ease-in-out;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const spaceInserter = styled.div`
    padding: 10px;
`
