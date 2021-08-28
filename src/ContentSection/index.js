import React from "react";
import {
  ContentSectionContainer,
  ContentSectionWrapper,
  ContentSectionPhoto,
  ContentSectionText,
  ContentH1,
  ContentP,
  ContentAction,
} from "./ContentSectionElements";

import Icon from '../Images/img5.svg'

const ContentSection = () => {
  return (
    <ContentSectionContainer>
      <ContentSectionWrapper>
              <ContentSectionPhoto src={ Icon}/>
        <ContentSectionText>
          <ContentH1>Mobile App Coming Soon</ContentH1>
          <ContentP>Continue using orramo on your browser and be first to be notified when we release our mobile app</ContentP>
          <ContentAction>Notify Me!</ContentAction>
        </ContentSectionText>
      </ContentSectionWrapper>
    </ContentSectionContainer>
  );
};

export default ContentSection;
