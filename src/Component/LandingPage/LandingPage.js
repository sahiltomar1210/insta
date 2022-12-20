import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from "../../Images/tech.jpg"
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className='landing-image'>
            <img src={LandingImage} alt="landing" />
        </div>
        <div className="landing-actions">
        <div  className='landing-text'>
            10X Team 04
        </div>
        <Link to="/post-view" >
        <div className='btn'>
        <button>Enter</button>
            </div>
        </Link>
        
        </div>
        
      </div>
    </>
  )
}

export default LandingPage
