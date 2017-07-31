import React from 'react'
import image from './images/solar_commercial_cropped.jpg'
import image1 from './images/barley-field.jpg'
import image2 from './images/solar-panel-2.png'
import image3 from './images/solar-install.jpg'

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
            <h1>Go Green</h1>
            <p>Reduce the carbon footprint with solar and build a clean image for your business</p>
          </div>
        </div>
        <div className='block'>
          <div className='contentBlock'>
            <h1>Secure your business for the future</h1>
            <p>Rising energy prices can put a strain on any business. Solar power is a cost-effective solution that can lead to massive savings in the future.
            </p>
          </div>
          <div className='imageBlock'>
            <img src={image2}/>
          </div>
        </div>
        <div className='block'>
          <div className='imageBlock'>
            <img src={image3}/>
          </div>
          <div className='contentBlock'>
            <h1>Get the solution that is right for your business</h1>
            <p>Every business is different and will require a different solution. At Freedom Energy we talior a solution that is right for you at the lowest cost.</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Commercial
