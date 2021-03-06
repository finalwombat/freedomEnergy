import React, {Component} from 'react'
import { slide as Menu} from 'react-burger-menu'
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

const handleItemClick = () => {
  this.setState({isOpen: !this.state.isOpen})
}
export default class SmallMenu extends Component {
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
    <div className='menu' style={menuStyle}>
      <div className='home-logo'>
        <NavLink to="/"><img src="logo2.png" alt="Freedom Energy" className="logo"/></NavLink>
      </div>
      <div className='smallMenu'>
      <Menu right width={'40%'} isOpen={this.state.isOpen}>
      <a href='tel:+1300695644' title="Call Freedom Solar" className="item call"><img src={phone} /></a>
        <NavLink to="/residential" className="item" onClick={this.handleItemClick}>Residential</NavLink>
        <NavLink to="/commercial/commercialsolar" className="item" onClick={this.handleItemClick}>Commercial</NavLink>
        <NavLink to="/utilities" className="item" onClick={this.handleItemClick}>Utilities</NavLink>
        <NavLink to="/contact" className="item" onClick={this.handleItemClick}>Contact</NavLink>
      </Menu>
    </div>
    </div>
  )
  }
}



// <SemanticMenu attached='top'>
//   <Dropdown item icon='content' simple>
//     <Dropdown.Menu>
//       <Dropdown.Item onChange={this.handleItemClick}>
//         <NavLink to="/residential" className="item">Residential</NavLink>
//       </Dropdown.Item>
//       <Dropdown.Item onClick={this.handleItemClick}>
//         <NavLink to="/commercial" className="item">Commercial</NavLink>
//       </Dropdown.Item>
//       <Dropdown.Item onClick={this.handleItemClick}>
//         <NavLink to="/utilities" className="item">Utilities</NavLink>
//       </Dropdown.Item>
//       <Dropdown.Item onClick={this.handleItemClick}>
//         <NavLink to="/contact" className="item">Contact</NavLink>
//       </Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
//   <SemanticMenu.Item>
//     <a href='tel:+1300695644' title="Call Freedom Solar" className="item call"><img src={phone} /></a>
//   </SemanticMenu.Item>
// </SemanticMenu>
