import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between', width:1400, marginTop:50}}>
            <Link to={'/men'}>men</Link>
            <p>men</p>
            <p>wemen</p>
            <p>kids</p>
            <p>Beauty</p>
            <p>Watches</p>
            <p>Gits</p>
            <p>Brands</p>
            <p>HomeStop</p>
            <h2>StyleHub</h2>
        <h4>Barga%Ns</h4>
        <h4>Luxe</h4>
        </div>
        
        
    </div>
  )
}
