import React from 'react'


export const Search = () => {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between', width:700}}>
        <h1>Shoppers Stop </h1>
        <input type='search' placeholder='what are you looking for?'></input>
        <select>
            <option>Login</option>
        </select>
       
        </div>
    </div>
  )
}
