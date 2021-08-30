import styled from "styled-components";
import {Link} from 'react-router-dom'
export const ContentSectionContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const ContentSectionWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 830px) {
    display: block;
    margin-top: 100px;

  }
`;
export const ContentSectionPhoto = styled.img`
  width: 500px;
  height: 500px;

  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    width: 350px !important;
    height: 350px !important;
  }
`;
export const ContentSectionText = styled.div`
`;
export const ContentH1 = styled.h1`
  font-size: 20px;
  color: #5c667b;
  max-width: 500px;
  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    text-align: center;

    justify-content: center;
  }
`;
export const ContentP = styled.p`
  font-weight: 500;
  color: black;
  max-width: 500px;
  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 400px) {
      margin-left: 30px;
    max-width: 300px;

  }
`;
export const ContentAction = styled(Link)`
text-decoration: none;
  background-color: #ffa500;
  color: black;
  border: none;
  font-size: 20px;
  margin-top: 80px;
  padding: 15px 50px;
  border-radius: 5px;
  margin-top: 40px;


  &:hover {
    opacity: 80%;
  }
  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    margin: 40px 180px;
    padding: 5px 30px;
    font-size: 15px;




  }
  @media screen and (max-width: 500px) {
    transition: 0.2s ease-in-out;
    margin: 40px 130px;
    padding: 5px 30px;
    font-size: 15px;
  }
  @media screen and (max-width: 557px) {
    transition: 0.2s ease-in-out;
    margin: 40px 130px;
    padding: 5px 30px;
    font-size: 14px;
  }
`;
