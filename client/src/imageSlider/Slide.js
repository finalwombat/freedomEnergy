import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Slide = (props) => {

  const current = props.background[props.current]
  const dots = props.dots
  const LeftArrow = props.leftArrow
  const RightArrow = props.rightArrow
  const background = {
    backgroundImage: `url(${current})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const heading = props.heading
  const text = props.text
  return (
    <div style={background} className="slide">
      <h1>{heading}</h1>
      <h2>{text}</h2>
      <Link to="/contact"><div className='contactButton'><Button size='big'>Contact Us</Button></div></Link>
      <div className="slidernav">
        {LeftArrow}
        {dots}
        {RightArrow}
      </div>

    </div>
  )
}

export default Slide
