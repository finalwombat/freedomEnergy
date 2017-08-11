import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <Link to="/"><h1>Freedom Energy</h1></Link>
        <div className='links'>
          <a href='https://www.facebook.com/freedomenergysolutionsaus/'> <Button color='blue' icon='facebook' /></a>
          <Link to="/residential"><h3>Residential</h3></Link>
          <Link to="/commercial"><h3>Commercial</h3></Link>
          <Link to="/utilities"><h3>utilities</h3></Link>
          <Link to="/contact"><h3>Contact</h3></Link>
        </div>
    </div>
  )
}

export default Footer
