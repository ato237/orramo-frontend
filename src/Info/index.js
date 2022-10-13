import React, { useEffect } from "react";
import {
  ContentSectionContainer,
  ContentSectionWrapper,
  ContentSectionPhoto,
  ContentSectionText,
  ContentH1,
  ContentP,
  Div,
} from "./InfoElements";
import "aos/dist/aos.css";
import Aos from "aos";
import Icon from "../Images/imgf.svg";

const ContentSection = () => {
  useEffect(() => {
    Aos.init({ duration:2000 });
  }, []);
  return (
      <Div data-aos="fade-up" id="download">
    <ContentSectionContainer >
      <ContentSectionWrapper>
        <ContentSectionText>
          <ContentH1>Why Orramo?</ContentH1>
          <ContentP>
            With the surging adoption of mobile money Services like Orange
            Money, MTN Mobile money, EU money etc.. We the users are left in the
            blue when it comes to knowing transaction fees for mobile money
            transactions. Knowing how much money to include as transaction fee
            when sending money to a loved one or for business purposes is not
            straight forward. So we have to either look at the prices grid
            (which are mostly outdated) or ask someone else who ususally does
            not know better. This makes us usually include more money than we
            want to when sending money. <b>Orramo</b> makes it very easy to
            instantly know the fee needed for any transaction type, which
            includes; Withdrawal, sending to a network client and sending to a
            non network client. Depending on how and why you use it, being aware
            of how much is leaving and entering your account, and keeping track
            of how much extra fee you pay is always better.
          </ContentP>
        </ContentSectionText>
        <ContentSectionPhoto src={Icon} />
      </ContentSectionWrapper>
    </ContentSectionContainer>
    </Div>
  );
};

export default ContentSection;
