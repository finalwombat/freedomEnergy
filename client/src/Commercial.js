import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import image from './images/solar_commercial_cropped.jpg'
import image1 from './images/barley-field.jpg'
import image2 from './images/solar-panel-2.png'
import image3 from './images/solar-install.jpg'
import tick from './images/tick2.png'

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
          <div className='imageBlock imageBlock1'>
            <img src={image1}/>
          </div>
          <div className='contentBlock contentBlock1'>
            <h1>Go Green</h1>
            <p>Reduce the carbon footprint with solar and build a clean image for your business</p>
          </div>
        </div>
        <div className='block'>
          <div className='contentBlock contentBlock2'>
            <h1>Secure your business for the future</h1>
            <p>Rising energy prices can put a strain on any business. Solar power is a cost-effective solution that can lead to massive savings in the future.
            </p>
          </div>
          <div className='imageBlock imageBlock2'>
            <img src={image2}/>
          </div>
        </div>
        <div className='block'>
          <div className='imageBlock imageBlock3'>
            <img src={image3}/>
          </div>
          <div className='contentBlock contentBlock3'>
            <h1>Get the solution that is right for your business</h1>
            <p>Every business is different and will require a different solution. At Freedom Energy we talior a solution that is right for you at the lowest cost.</p>
          </div>
        </div>
      </div>
      <div className='services'>
        <h1>Commercial Solar</h1>
        <p>Allow us to tailor a solar solution that is right for your business.
          Freedom Energy offers eligible customers access to low-cost commercial funding.
          In most cases, we can provide positive cash flow outcome from day one, leaving little or no exposure.
          These low-risk solar funding options provide additional benefits such as:
          </p>
        <div className='dotPoints'>
          <ul className='dotPoint'>
            <li>Tax deductions</li>
            <li>Depreciation</li>
            <li>Off & On Balance Sheet finance options</li>
            <li>Immediate positive cash flow</li>
          </ul>
        </div>
        <p>Services provided by our commercial team inclued:</p>
        <div className='dotPoints'>
          <ul className='dotPoint'>
            <li>Grid Applications</li>
            <li>System Design</li>
            <li>Stakeholder Management</li>
            <li>Network Feasibility Studies</li>
            <li>Financial Forecasting</li>
            <li>Rooftop & Ground Mount Systems</li>
            <li>Grid-Connect and Hybrid systems</li>
          </ul>
        </div>
      </div>
      <div className='bottomContact'>
      <Link to="/contact">
          <Button animated size='big'>
            <Button.Content visible>Contact Us</Button.Content>
            <Button.Content hidden><Icon name='mail outline' /></Button.Content>
          </Button>
      </Link>
      </div>
    </div>
  )

}

export default Commercial
