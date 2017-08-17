import React, {Component} from 'react'
import { Menu as SemanticMenu, Dropdown, Icon, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import phone from './images/phone.png'


const menuStyle = {
  display: '-webkit-box',
  display: '-ms-flexbox',
  display: 'flex',
  'margin-left': 0,
  'margin-right': 0,
  'margin-bottom': '50px',
  'font-size': '1.07142857rem'
}
const SmallMenu = () => {
  return (
    <div className='menu' style={menuStyle}>
      <div className='home-logo'>
        <NavLink to="/"><img src="logo2.png" alt="Freedom Energy" className="logo"/></NavLink>
      </div>
      <div className='smallMenu'>
      <SemanticMenu attached='top'>
        <Dropdown item icon='content' simple>
          <Dropdown.Menu>
            <NavLink to="/residential" className="item"><Dropdown.Item>
              Residential
            </Dropdown.Item></NavLink>
            <NavLink to="/commercial" className="item"><Dropdown.Item>
              Commercial
            </Dropdown.Item></NavLink>
            <NavLink to="/utilities" className="item"><Dropdown.Item>
              Utilities
            </Dropdown.Item></NavLink>
            <NavLink to="/contact" className="item"><Dropdown.Item>
              Contact
            </Dropdown.Item></NavLink>
          </Dropdown.Menu>
        </Dropdown>
        <SemanticMenu.Item>
          <a href='tel:+1300695644' title="Call Freedom Solar" className="item call"><img src={phone} /></a>
        </SemanticMenu.Item>
      </SemanticMenu>
    </div>
    </div>
  )
}

export default SmallMenu
