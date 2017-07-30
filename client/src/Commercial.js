import React from 'react'
import image from './images/solar_commercial_cropped.jpg'
import image1 from './images/barley-field.jpg'
import image2 from './images/solar-panel-2.png'

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
  )

}

export default Commercial
