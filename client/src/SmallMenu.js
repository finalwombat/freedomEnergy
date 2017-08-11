import React, {Component} from 'react'
import { Menu as SemanticMenu, Dropdown, Icon, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SmallMenu = () => {
  return (
    <div className='menu'>
      <div className='home-logo'>
        <NavLink to="/"><img src="logo2.png" alt="Freedom Energy" className="logo"/></NavLink>
      </div>
      <div className='smallMenu'>
      <SemanticMenu attached='top'>
        <Dropdown item icon='content' simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to="/residential" className="item">Residential</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/commercial" className="item">Commercial</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/utilities" className="item">Utilities</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/contact" className="item">Contact</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href='tel:+1300695644' title="Call Freedom Solar" className="item call">1300 695 644</a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SemanticMenu>
    </div>
    </div>
  )
}

export default SmallMenu
