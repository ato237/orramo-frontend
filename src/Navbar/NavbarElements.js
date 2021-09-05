import styled from "styled-components";
import { Link  as Links } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars as bar } from "react-icons/fa";
import { ImCross as cross } from "react-icons/im";

export const NavbarContainer = styled.div``;

export const NavbarWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: #14213d;
  padding: 20px;
  margin: 0;
  @media screen and (max-width: 910px){
      padding: 32px;

}
`;

export const NavbarElements = styled.li`
  padding-left: 40px;
`;

export const NavLinksLogo = styled(LinkR)`
  position: absolute;
  left: 150px;
  font-size: 20px;
  text-decoration: none;
  color: white;

  @media screen and (max-width: 910px){
      transition: 0.2s ease-in-out;
      left: 50px;
      top: 20px;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: aliceblue;
  }
`;
export const NavLinksButton = styled(LinkR)`
border-radius: 2px;
  position: absolute;
  right: 150px;
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  color: #000000;
  background-color: #fca311;
  padding: 10px;
  margin: -10px;

  &:hover {
    transition: 0.1s ease-in-out;
    opacity: 80%;
  }

  @media screen and (max-width: 910px){
      display: none;
  }
`;

export const NavLinks = styled(Links)`
  cursor: pointer;
  font-size: 17px;
  color: white;

  &:hover {
    color: #fca311;
  }

  @media screen and (max-width: 910px){
      display: none;
  }
`;

export const MenuBar = styled(bar)`
display: none;
  position: absolute;
  top: 18px;
  right: 50px;
  font-size: 25px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 910px){
      display: inline;
  }
`;
export const MenuCross = styled(cross)`
display: none;
  position: absolute;
  top: 18px;
  right: 50px;
  font-size: 25px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 910px){
      display: inline;
  }
`;
