import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SubMenuCommercial from './SubMenuCommercial'
import image from './images/solar_building.jpg'
import image1 from './images/solar-panel-sky.jpg'
import image2 from './images/solar-install.jpg'
import amanda from './images/amanda.jpg'
import tick from './images/tick2.png'

const RoofLeasing = () => {
  return (
    <div className='commercialContainer'>
      <SubMenuCommercial />
      <div className='mainImage'>
        <img src={image} alt='commercial'/>
        <h1>Roof Lease Agreement</h1>
      </div>
      <div className='mainContent'>
        <div className='services'>
          <h1>COMMERCIAL PROPERTY OWNERS CAN ENJOY EXTRA INCOME WITH ROOFTOP LEASING</h1>
          <p>Freedom Energy is offering commercial property owners an additional income stream
          by renting building rooftops.
          Freedom Energy is seeking to lease rooftop space from commercial property owners.
          Freedom will own and operate the solar power equipment and meet all costs associated
          with construction, operation and maintenance.</p>
        </div>
      </div>
      <div className='contentBlocks roofleasing'>
        <div className='block'>
          <div className='imageBlock imageBlock1'>
            <img src={image1}/>
          </div>
          <div className='contentBlock contentBlock1'>
            <h1>Roof lease agreement</h1>
            <p>Freedom Energy rents the roof and farms the sunshine.
            The ownership, cost of design, installation and maintenance of the solar system is covered
            by Freedom Energy for the term of the agreement.
            Freedom Energy will on sell the energy to energy retailers through existing PPA’s , off take agreement.
            Alternatively tenants have the option to purchase the electricity produced at discounted grid
            electricity rates.</p>
          </div>
        </div>
        <div className='block'>
          <div className='contentBlock contentBlock2'>
            <h1>Benifits for property owners</h1>
            <p>This arrangement particularly suits property owners who have one main meter (NMI) with an electricity
             supply agreement and sub meters for tenants who purchase their electricity from the property owner.
             Solar electricity consumed at the main meter is divided equitably to the sub meters in the same way as
             the normal electricity consumption and can be charged to the sub meter at the retail electricity price.
             </p>
          </div>
          <div className='imageBlock imageBlock2'>
            <img src={image2}/>
          </div>
        </div>
      </div>
      <div className='services'>
        <h1>ROOF LEASING BENEFITS:</h1>
        <div className='dotPoints'>
          <ul className='dotPoint'>
            <li>Additional rental return from unused roof space</li>
            <li>Immediate increase in asset value as a result of additional rental income</li>
            <li>No capital outlay or upfront costs</li>
            <li>Roof shading and insulation properties</li>
            <li>No expose to risk including maintenance or technology advances</li>
            <li>Increased NABER and Green Star ratings</li>
            <li>Reduced greenhouse gas emissions</li>
            <li>High visibility green benefit for your brand</li>
          </ul>
        </div>
      </div>
      <div className="amanda">
        <img src={amanda} alt='commercial'/>
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

export default RoofLeasing
