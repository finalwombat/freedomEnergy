import React from 'react'
import image from './images/projectdev3.jpg'

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
        power plant, through to the successful project's commissioning. The Project Development Team's objectives are to minimize
        project budgets while maximize energy output, developing the right type of solar solution for each specific site and client.
        Freedom Energy has a network of both private equity and venture capital investment partners offering progressive financing
        models and investment opportunities</p>
      </div>
    </div>
  )

}

export default utilities
