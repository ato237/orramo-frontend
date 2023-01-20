import styled from "styled-components";
import {Link} from 'react-router-dom'

export const MainContentContainer = styled.section`
  z-index:45;
  background-color: #14213d;
  height: 300px;
  padding: 20px;
`;
export const MainContentTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
`;
export const MainContentHeading = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 25;
`;

export const ContentButton = styled(Link)`
text-decoration: none;
  background-color: #ffa500;
  color: black;
  border: none;
  font-size: 20px;
  padding: 15px 50px;
  border-radius: 5px;
position: relative;
display: flex;

justify-content: center;
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
    padding: 5px 10px;
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    transition: 0.2s ease-in-out;
    margin: 40px 115px;
    padding: 5px 1px;
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    transition: 0.2s ease-in-out;
    margin: 40px 120px;
    padding: 5px 5px;
    font-size: 14px;
  }
`;