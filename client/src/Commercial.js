import React from 'react'
import image from './images/solar_commercial_cropped.jpg'

const Commercial = () => {
  return (
    <div className='commercialContainer'>
      <div className='mainImage'>
        <img src={image} alt='commercial'/>
        <h1>Allow us to tailor a solar solution that is right for your business.</h1>
      </div>
    </div>
  )

}

export default Commercial
