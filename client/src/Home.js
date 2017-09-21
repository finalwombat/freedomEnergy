import React from 'react'
import Slider from './imageSlider/Slider'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import image from './images/solarhouse2.jpg'
import warranty from './images/warranty-label.png'
import residentialImage from './images/solar_house.jpg'
import commercialImage from './images/solar_commercial.jpg'
import utilityImage from './images/solar_utility.jpg'

const mainBackground = {
  backgroundImage: `url(${image})`
}

const residentialBackground = {
  backgroundImage: `url(${residentialImage})`,
}

const commercialBackground = {
  backgroundImage: `url(${commercialImage})`
}

const utilityBackground = {
  backgroundImage: `url(${utilityImage})`
}

const findOutMoreButton = <Button animated>
  <Button.Content visible>Find Out More</Button.Content>
  <Button.Content hidden><Icon name='right arrow' /></Button.Content>
</Button>

const Home = (props) => {

  const handleItemClick = (e) => {
  const name = e.target.name
  props.handleItemClick(name)
  }

  return (
    <div className="homeContainer">
    <div className='mainImage' >

      <img src={image} alt='home'/>
      <h1>Let Sunlight Power Your Life</h1>
      <img id="warranty" src={warranty} alt="25 year warranty" />
    </div>
        <div className="cards">
        <Link to='/residential'>
          <div className="card" style={residentialBackground} onClick={handleItemClick} name='/residential'>
              <h2>Residential Solutions</h2>
              {findOutMoreButton}
          </div>
        </Link>
        <Link to='/commercial'>
          <div className="card" style={commercialBackground} onClick={handleItemClick} name='/commercial'>
              <h2>Commercial Solutions</h2>
              {findOutMoreButton}
          </div>
        </Link>
        <Link to='/utilities'>
          <div className="card" style={utilityBackground} onClick={handleItemClick} name='/utilities'>
              <h2>Utility Solutions</h2>
              {findOutMoreButton}
          </div>
        </Link>
        </div>
        <div className='testimonial'>
          <p>"Freedom Energy did a great job installing our 10kw system.
          Before solar our energy bill was around $1100 a quarter,
          its now reduced to roughly $300 for the same period last year.
Going solar was easy , we’re happy with the service we received, and our energy bills no longer a problem!"</p>
          <p>Terry & Angela McGinnis - Port Pirie SA. </p>
        </div>
    </div>
  )

}

export default Home
