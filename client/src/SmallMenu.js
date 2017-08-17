import React, {Component} from 'react'
import { Menu as SemanticMenu, Dropdown, Icon, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import phone from './images/phone.png'


const menuStyle = {
  display: -webkit-box;
display: -ms-flexbox;
display: flex;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 50px;
  font-size: 1.07142857rem;
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
