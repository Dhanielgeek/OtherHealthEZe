import React from 'react'
import Creative from '../assets/Images/cc-license.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerImg">
            <img src={Creative} alt="" />
        </div>
        <p>2015 © Nweje Ebuka .F. for Africa some rights reserved</p>
    </div>
  )
}

export default Footer