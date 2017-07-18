import React from 'react'
import image from './images/solar_commercial_cropped.jpg'

const Commercial = () => {
  return (
    <div className='commercialContainer'>
      <div className='mainImage'>
        <img src={image} alt='commercial'/>
        <h1>Commercial solution that is right for your business.</h1>
      </div>
      <div className='mainContent'>
        <div className='services'>
          <h1>Why solar power your business with solar?</h1>
          <p>Solar power is an affordable way to lower your electricity costs by taking control of your energy needs. Solar
          power can protect your company from rising energy expenses and may also promote the sustainable values of your business</p>
        </div>
      </div>
    </div>
  )

}

export default Commercial
