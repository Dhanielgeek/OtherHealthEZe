import React from 'react'
import Cadbury from '../assets/Images/partners2.png'
import Microsoft from '../assets/Images/partners3.jpg'
import Who from '../assets/Images/who.png'
import Brut from '../assets/Images/JB-removebg-preview.png'

const Partner = () => {
  return (
    <div className='partner'>
        <div className='partCon'>
            <h3>Partner</h3>
            <div className="line"></div>
        </div>
        <div className="logocon">
            <img src={Cadbury} alt="" />
            <img src={Microsoft} alt="" />
            <img src={Who} alt="" />
            <img src={Brut} alt="" />
        </div>
    </div>
  )
}

export default Partner