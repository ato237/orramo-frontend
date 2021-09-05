import React,{useEffect} from "react";
import Icon1 from '../Images/img4.svg'
import Icon2 from '../Images/img2.svg'
import Icon3 from '../Images/img3.svg'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesCard,
} from "./ServiceElements";
import "aos/dist/aos.css"
import Aos from "aos";

const Services = () => {

  useEffect(() => {
    Aos.init({duration:3000})
  }, [])
  return (
    <ServicesContainer id ="service">
      <ServicesH1>ORRAMO in 3 steps</ServicesH1>
      <ServicesWrapper>
        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <ServicesH2>Clear Your Doubts</ServicesH2>
          <ServicesP>
           Wondering How much Mobile Money Charges you need before transacting?
          </ServicesP>
        </ServicesCard>
        <ServicesCard data-aos="fade-right">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Calculate Your charges</ServicesH2>
          <ServicesP>
            Calculate Your Mobile Money Charges instantly and send or withdraw money!
                  </ServicesP>
        </ServicesCard>
        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon3} />
          <ServicesH2>Always Available</ServicesH2>
          <ServicesP>
            Determine the total amount you need for all Mobile Money your transactions!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
