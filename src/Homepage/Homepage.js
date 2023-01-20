import React from 'react'
import "./Homepage.css"
import image from '../Images/ATO.png'
import { Service } from './Components/Service'
const Homepage = () => {
  return (
    <div>
        <div className='Container'>
            <div className='mainContent'>
                <div className='heroSection'>
                    <div style={{marginTop:50}}>
                        <h1 style={{fontSize:50, maxWidth:500}}>
                            We help you grow and reach <span style={{color:"#A5B5BF", fontWeight:500, fontStyle:"italic"}}>maximum potential.</span>
                        </h1>
                        <p style={{fontSize:15, maxWidth:500}}>Our agency helps you grow your tech skills and grow your social media audience to full capacity.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <h2 className='serviceTitle'>Orramo's Services</h2>
                <div className='services'>
                    <Service textColor="black" isLink = {false}  color="#e5e5e5" link="/charges-calculator" title="utility" logo={image} description="Access our tools. Momo Calculator, Currency conveter and more."/>
                    <Service textColor="white" isLink = {true} color="#14213d"link="https://orralearn.com" title="Development and coding" logo={image} description="Learn How to Code, Javascript, Python, Java, React Native and more."/>
                    <Service textColor="white" isLink = {false}   color="#000000" link="/download" title="Advertise on Facebook" logo={image} description="Access and post to Facebook groups with over 10M+ members around the world."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;