import React from 'react'
import {BrowserRouter,  Route, Routes} from "react-router-dom"
import { Men } from '../screns/men'
import { Women } from '../screns/women'
import { Kids } from '../screns/kids'
import { Beauty } from '../screns/beauty'
import { Watches } from '../screns/watches'
import { Gifts } from '../screns/gifts'
import { Brands } from '../screns/brands'
import { Homestop } from '../screns/homestop'

export const Navigations = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/men' element={<Men/>}></Route>
            <Route path='women' element={<Women/>}></Route>
            <Route path='kids' element={<Kids/>}></Route>
            <Route path='beauty' element={<Beauty/>}></Route>
            <Route path='watches' element={<Watches/>}></Route>
            <Route path='gits' element={<Gifts/>}></Route>
            <Route path='brands' element={<Brands/>}></Route>
            <Route path='homestop' element={<Homestop/>}></Route>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
