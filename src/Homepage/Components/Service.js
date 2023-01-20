import React from 'react'
import './Service.css'
import { Link, } from "react-router-dom";
import {AiFillAlert} from "react-icons/ai"
import {BsArrowUpRight} from "react-icons/bs"
export const Service = ({title,logo,description,link,color, isLink, textColor}) => {
  return (
    <div className='serviceContainer' >
        {isLink == false?
    (
        <Link className='serviceContent' style={{backgroundColor:color}} to={link}>
        <div className='serviceBlock' >
            <div style={{color:textColor}} className='textALogo'>
            <h3  style={{color:textColor}} className='title'>{title}</h3>
            <BsArrowUpRight  style={{color:textColor}} className='arrow'/>
            </div>
            <AiFillAlert  style={{color:textColor}} className='logo'/>
            <h2   style={{color:textColor}} className='description'>{description}</h2>
        </div>
        </Link>
    )  :
    ( <a className='serviceContent' style={{backgroundColor:color}} href={link}>
    <div className='serviceBlock' >
        <div className='textALogo'>
        <h3  style={{color:textColor}} className='title'>{title}</h3>
        <BsArrowUpRight  style={{color:textColor}} className='arrow'/>
        </div>
        <AiFillAlert  style={{color:textColor}} className='logo'/>
        <h2  style={{color:textColor}} className='description'>{description}</h2>
    </div>
    </a>)  
    }
       

    </div>
  )
}
