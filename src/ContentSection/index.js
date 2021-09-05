import React,{useEffect} from "react";
import {
  ContentSectionContainer,
  ContentSectionWrapper,
  ContentSectionPhoto,
  ContentSectionText,
  ContentH1,
  ContentP,
  ContentAction,
} from "./ContentSectionElements";
import "aos/dist/aos.css"
import Aos from "aos";
import Icon from '../Images/img5.svg'

const ContentSection = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <ContentSectionContainer data-aos="fade-up" id="download">
      <ContentSectionWrapper>
              <ContentSectionPhoto src={ Icon}/>
        <ContentSectionText>
          <ContentH1 >Mobile App Coming Soon</ContentH1>
          <ContentP >Continue using orramo on your browser and be first to be notified when we release our mobile app</ContentP>
          <ContentAction to ="/download" >NotifyMe!</ContentAction>
        </ContentSectionText>
      </ContentSectionWrapper>
    </ContentSectionContainer>
  );
};

export default ContentSection;
