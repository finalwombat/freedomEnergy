import React from 'react'
import Image from './images/solar_house.jpg'
import pannelImage from './images/pannel-sky.jpg'
import image1 from './images/sun_surfboard.jpg'
import image2 from './images/solar_sky.jpg'

const whySolarStyle = {
  backgroundImage: `url(${pannelImage})`,
  opacity: 0.3
}

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
        <div className='contentBlocks'>
          <div className='block'>
            <div className='imageBlock'>
              <img src={image1}/>
            </div>
            <div className='contentBlock'>
              <h1>Break free from rising energy prices</h1>
              <p>Energy prices are constantly on the rise. Solar power can significantly reduce monthly electricity bills
                by taking advantage of our most abundent and free energy source.</p>
            </div>
          </div>
          <div className='block'>
            <div className='contentBlock'>
              <h1>The right solution for your roof</h1>
              <p>Freedom Energy offers cost-effective and flexible solutions to maxamize solar performance.
                </p>
            </div>
            <div className='imageBlock'>
              <img src={image2}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Residential
