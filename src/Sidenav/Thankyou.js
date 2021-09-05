import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";

const PageContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 200px;

  @media screen and (max-width: 900px) {
    padding: 40px;
  }
`;

const Paragraph = styled.div`
  font-size: 50px;
  max-width: 1000px;
  @media screen and (max-width: 900px) {
    max-width: 500px;

    font-size: 30px;
  }
`;

const Linsk = styled(Link)`
  text-decoration: none;
`;

const Icon = styled(GrContactInfo)`
  font-size: 250px;
  @media screen and (max-width: 900px) {
    font-size: 130px;
  }
`;

const Thankyou = () => {
  return (
    <PageContainer>
      <Icon />

      <Paragraph>
        Thank You for submitting Your Contact Details! You Shall be the first to
        know when we release our mobile app!
        <Linsk to="/"> Go back to home page</Linsk>
      </Paragraph>
    </PageContainer>
  );
};

export default Thankyou;
