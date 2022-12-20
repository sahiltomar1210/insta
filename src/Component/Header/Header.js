import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav className='header'>
        <section className="logo">
            <img src={require("../../Images/insta clone.png")} alt="logo" />
        </section>
        <section className="camera-logo">
        <img src={require("../../Images/cameraimage.jpg")} alt="logo" />
        </section>
      </nav>
    </>
  )
}

export default Header
