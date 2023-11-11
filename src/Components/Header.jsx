import React from 'react'
import './style.css'
import HeaderLogo  from '../assets/Images/cdc-img.jpg'
import Menu from '../assets/Images/menu.png'

const Header = () => {
  return (
    <div className='header'>
        
        <div className='HeaderImg'>
            <img src={HeaderLogo} alt="" />
        </div>
        <div className='Nav'>
            <nav>About</nav>
            <nav>Program</nav>
            <nav>Join</nav>
            <nav>Sponsor</nav>
            <nav>News</nav>
        </div>
        <div className='CampainAd'>
            <button>ACD campaign</button>
        </div>
        <div className='menu'>
            <img src={Menu} alt="" />
        </div>
    </div>
  )
}

export default Header