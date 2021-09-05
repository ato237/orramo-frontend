import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #14213D;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: $${({ isOpen }) => (isOpen ? "100%" : "0")};
    left: ${({ isOpen }) => (isOpen ? "0" : "100%")};


    @media screen and (min-width:910px){
      display: none;
    }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 70px);
  }
`;

export const SidebarLink = styled(LinkS)`
position: relative;
right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    border-radius: 40px;
    background-color: white;
    color: #000;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 5px;
  background: #FFA500;
  white-space: nowrap;
  padding: 16px 64px;
  color: #000;
  outline: none;
  font-size:30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 70%;
  }

  @media screen and (max-width: 500px){
    padding: 6px 30px;
    font-size:20px;

  }
`;

