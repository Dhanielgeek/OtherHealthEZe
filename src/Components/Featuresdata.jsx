import React from 'react'

const Featuresdata = ({img1,img2,para,h3,span,imgod}) => {
  return (
    <div className='CardInfo'>
        
                     <div className="contain">
                <div className='hold'>
                     <div className='imghold1'>
                         <img src={img1} alt="" />
                     </div>
                     <div className='imghold2'>
                         <img src={img2} alt="" />
                     </div>
                 </div>
                 <div className='HoldText'>
                     <h3>{h3}</h3>
                     <span>{span}</span>
                     <p>{para}</p>
                 </div>
                </div>
               <div className="contain">
               <div className='hold'>
                     <div className='imghold1'>
                         <img src={imgod} alt="" />
                     </div>
                     <div className='imghold2'>
                         <img src={img2} alt="" />
                     </div>
                 </div>
                 <div className='HoldText'>
                     <h3>{h3}</h3>
                     <span>{span}</span>
                     <p>{para}</p>
                 </div>
               </div>
         
    </div>
  )
}

export default Featuresdata