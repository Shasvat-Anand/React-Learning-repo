import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>

        
    <ul>
      <li>
        <NavLink to = "/"  className= {({isActive}) => isActive ? "nav-link-style" : "nav-link" }> Home   </NavLink> </li>
        
      <li><NavLink  to = "/about" className= {(({isActive}) => isActive ? "nav-link-style" : "nav-link" )}> About </NavLink></li>
      <li><NavLink to = "/Dashboard"  className= {(({isActive})  => isActive ? "nav-link-style" : "nav-link" )}  > DashBoard </NavLink></li>
    </ul>



    </div>
  )
}

export default Navbar
