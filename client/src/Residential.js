import React from 'react'
import Image from './images/solar_house.jpg'

const Residential = () => {
  return (
    <div className='residentialContainer'>
      <div className='mainImage'>
        <img src={Image} alt=""/>
        <h1>We make solar simple</h1>
      </div>
      <div className='mainContent'>
        <div className='services'>
          <h1>Our Service</h1>
          <p>Solar offers that remove the hassle from solar power.
            Freedom Energy deliver the industries best solar products combined with outstanding customer service and
            installation designed to take the guess work out of switching to solar.
            We take care of everything required to get you started, from site feasibility,
            network applications and installation of your system.
            We also have the best industry warranties that cover you for the life of your system.</p>
        </div>
      </div>
    </div>
  )

}

export default Residential
