import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Fashion from '../../views/Fashion'
import Accessory from "../../views/Accessory";
import Digital from '../../views/Digital'
import Cart from '../../views/Cart'

export default function HeaderCollection() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Header/>}/>
        <Route path={"/fashion"} element={<Fashion/>}/>
        <Route path={"/accessory"} element={<Accessory/>}/>
        <Route path={"/digital"} element={<Digital/>}/>
        <Route path={"/myCart"} element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}