import React from 'react'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
              <NavLink to={'/men'}></NavLink>
               
            </li>
        </ul>
    </div>
  )
}
