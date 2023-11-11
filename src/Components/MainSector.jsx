import React from 'react'
import Health from '../assets/Images/health-image.jpg'
import Workshop from '../assets/Images/Know-your-health-status.jpg'
import Heartlisten from '../assets/Images/Listen-to-your-heart.jpg'
import HealthWealth from '../assets/Images/Health-wealth.jpg'
import GoodHealth from '../assets/Images/good-health-vector.jpg'

const MainSector = () => {


    const Maindata = [

        {
            img: Health,
            H2 : "Lecture",
            text: "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."
        },
        {
            img: GoodHealth,
            H2 : "Health Exibition",
            text: "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."
        },
        {
            img: HealthWealth,
            H2 : "Forum",
            text: "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."
        },
        {
            img: Workshop,
            H2 : "Workshop",
            text: "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."
        },
        {
            img: Heartlisten,
            H2 : "Health ignite",
            text: "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."
        }
    ]
  return (
    <div className='Main'>
        <div className="mainProgam">
            <h2>Main Program</h2>
            <div className="line"></div>
        </div>
        <div className='ProgramContainer'>
           {
            Maindata.map((props)=>(
                <div className="card">
                <div className='cardImg'>
                    <img src={props.img} alt="" />
                </div>
                <h3>{props.H2}</h3>
                <p>{props.text}</p>
            </div>
            ))
           }
        </div>
        <div className="seeMore">
            <h2>SEE THE PROGRAM</h2>
        </div>
        <div className="join">
            <h4>Join Health Global submit 2022</h4>
        </div>
    </div>
  )
}

export default MainSector