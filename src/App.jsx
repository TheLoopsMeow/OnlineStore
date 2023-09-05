import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Router, Routes, Route, Link } from "react-router-dom"
import {useContext, createContext } from "react"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Store from "./Store"
import CartPage from "./CartPage"

const shoppingCart = createContext ({
  //No data to bein.  Items are stored as an object with a name matching the  item, and a number: n.
})

function App() {

  return (
    <>
    <BrowserRouter >
      <shoppingCart.Provider value={shoppingCart}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/NavBar" component={<NavBar />}></Route>
          <Route path="/Store" component={<Store />}></Route>
          <Route path="/CartPage" component={<CartPage />}></Route>
        </Routes>
      </shoppingCart.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
