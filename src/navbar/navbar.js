import React from 'react'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav >
    <div >
      <ol style={{display:'flex', justifyContent:'space-between', width:500}}>
        <li >
          <NavLink to={"/men"} >
           men
          </NavLink>
        </li>
       
          
        <li className="nav-item start">
          <NavLink to={"/women"} >
          women
          </NavLink>
        </li>

        <li className="nav-item start">
          <NavLink to={"/kids"} >
          kids
          </NavLink>
        </li>
        <li className="nav-item start">
          <NavLink to={"/Beauty"} >
          Beauty
          </NavLink>
        </li>
        
      </ol> 
    </div>
  </nav>
  
  )
}
