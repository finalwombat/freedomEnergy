import React from 'react'
import image from './images/projectdev3.jpg'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import image1 from './images/solar-sun.jpeg'
import image2 from './images/solar-farm.jpg'

const utilities = () => {
  return (
    <div className='utilitiesContainer'>
      <div className='mainImage'>
        <img src={image} alt='utilities'/>
        <h1>Project Development</h1>
      </div>
      <div className='services'>
        <h1>Solutions for utilities</h1>
        <p>Our Project Development Team has demonstrated their experience by successfully developing solar power plants globally.
        Freedom Energy has proven expertise in developing a project from the beginning, as strategic consultant we support companies
        and organisations by engineering a solution with unique insight into the requirements of a high-performance, durable solar
        power plant, through to the successful project's commissioning.</p>
      </div>
      <div className='contentBlocks'>
        <div className='block'>
          <div className='imageBlock'>
            <img src={image1}/>
          </div>
          <div className='contentBlock'>
            <h1>minimize
            project budgets while maximize energy output</h1>
            <p>The Project Development Team's objectives are to minimize
            project budgets while maximize energy output, developing the right type of solar solution for each specific site and client.</p>
          </div>
        </div>
        <div className='block'>
          <div className='contentBlock'>
            <h1>Invest in the future</h1>
            <p>Freedom Energy has a network of both private equity and venture capital investment partners offering progressive financing
            models and investment opportunities
            </p>
          </div>
          <div className='imageBlock'>
            <img src={image2}/>
          </div>
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

export default utilities
