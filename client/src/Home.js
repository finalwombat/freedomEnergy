import React from 'react'
import Slider from './imageSlider/Slider'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import residentialImage from './images/solar_house.jpg'
import commercialImage from './images/solar_commercial.jpg'
import utilityImage from './images/solar_utility.jpg'

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
      <Slider />
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
    </div>
  )

}

export default Home
