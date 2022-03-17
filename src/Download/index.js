import React, { useEffect } from "react";
import {
  ContentSectionContainer,
  ContentSectionWrapper,
  ContentSectionPhoto,
  ContentSectionText,
  ContentH1,
  ContentP,
  ContentLink,
  Image,
  Image2
} from "./DownloadElement";
import "aos/dist/aos.css";
import Aos from "aos";
import Icon from "../Images/iphoneM.jpg";
import Icon1 from "../Images/appstore.png";

import Icon2 from "../Images/googleplay.png";

const Download = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ContentSectionContainer>
      <ContentSectionWrapper>
        <ContentSectionPhoto src={Icon} />
        <ContentSectionText>
          <ContentH1>Download Orramo on Android or IOS Now!</ContentH1>
          <ContentP>
            Download our mobile app now and get access to the latest charges and
            a smoother experience overall
          </ContentP>
          <ContentLink href="https://apps.apple.com/us/app/orramo/id1613760471">
            <Image src={Icon1} />
          </ContentLink>
          <ContentLink href="https://play.google.com/store/apps/details?id=com.atoproduction.orramo&fbclid=IwAR2JkttqJ1hfVufeE-x8X0loyAQVCz1MhVPSbtCnG_X4-_hlrOiobaWYgKA">
            <Image2 src={Icon2} />
          </ContentLink>
        </ContentSectionText>
      </ContentSectionWrapper>
    </ContentSectionContainer>
  );
};

export default Download;
