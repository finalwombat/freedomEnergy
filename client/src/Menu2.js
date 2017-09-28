import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu2 = () => {
  return (
    <div className='menu'>
      <div className='left-menu'>
        <NavLink to="/"><img src="logo2.png" alt="Freedom Energy" className="logo"/></NavLink>
      </div>
      <div className='right-menu'>
        <NavLink to="/residential" className="item">Residential</NavLink>
        <NavLink to="/commercial/commercialsolar" className="item">Commercial</NavLink>
        <NavLink to="/utilities" className="item">Utilities</NavLink>
        <NavLink to="/contact" className="item">Contact</NavLink>
        <a href='tel:+1300695644' title="Call Freedom Solar" className="item call">1300 695 644</a>
      </div>
    </div>
  )
}

export default Menu2
