import React from 'react'
import one from '../assets/Images/1.jpg'
import two from '../assets/Images/2.jpg'
import three from '../assets/Images/3.jpg'
import four from '../assets/Images/4.jpg'
import five from '../assets/Images/5.jpg'
import six from '../assets/Images/6.jpg'
import Checkbox from '../assets/Images/checkbox.jpg'
import Featuresdata from './Featuresdata'

const Features = () => {

  return (
    <div className='featured'>
         <div className="featureGuest">
            <h2>Featured speakers</h2>
            <div className="line"></div>
        </div>
        <div className="GuestHolder">
            <Featuresdata img1={one} img2={Checkbox} h3="Dr.Amadou-Sall" span="Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal." para="Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board." imgod={two}/>
            <Featuresdata img1={three} img2={Checkbox} h3="Dr.Amadou-Sall" span="Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal." para="Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board." imgod={four}/>
            <Featuresdata img1={five} img2={Checkbox} h3="Dr.Amadou-Sall" span="Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal." para="Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board." imgod={six}/>
       
        </div>
    </div>
  )
}

export default Features