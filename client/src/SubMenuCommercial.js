import React from 'react'
import { NavLink } from 'react-router-dom'

const SubMenuCommercial = () => {
  return (
    <div className='subMenu menu'>
      <div className='right-menu'>
        <NavLink to="/commercial/commercialsolar" className="item" >Commercial Solar</NavLink>
        <NavLink to="/commercial/commercialroofleasing" className="item" >Roof Leasing</NavLink>
      </div>
    </div>
  )
}

export default SubMenuCommercial
