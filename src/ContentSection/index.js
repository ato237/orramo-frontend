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
import Icon from '../Images/iphoneM.jpg'

const ContentSection = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <ContentSectionContainer data-aos="fade-up" id="download">
      <ContentSectionWrapper>
              <ContentSectionPhoto src={ Icon}/>
        <ContentSectionText>
          <ContentH1 >Mobile App Available now!</ContentH1>
          <ContentP >Download our mobile app now and get access to the latest charges and a smoother experience overall</ContentP>
          <ContentAction to ="/download" >Get The App</ContentAction>
        </ContentSectionText>
      </ContentSectionWrapper>
    </ContentSectionContainer>
  );
};

export default ContentSection;
