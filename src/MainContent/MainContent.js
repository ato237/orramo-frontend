import styled from "styled-components";

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
export const MainContentHeading = styled.h4`

  display: flex;
  text-align: center;
  justify-content: center;

  color: white;
`;
export const Update = styled.h4`
 display: flex;
  text-align: center;
  justify-content: center;
font-size: 12px;
  color: yellow;
  @media screen and (max-width : 760px) {
    font-size: 8px;
  }
`