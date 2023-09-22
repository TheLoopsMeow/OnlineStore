import { useState } from 'react'
import './App.css'
import {BrowserRouter, Router, Routes, Route, Link } from "react-router-dom"
import {useContext, createContext } from "react"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Store from "./Store"
import CartPage from "./CartPage"


export let shoppingCart = createContext ()

function App() {
  let [cartItems, setCartItems] = useState([])

  return (
    <>
    <BrowserRouter >
      <shoppingCart.Provider value={{cartItems, setCartItems}}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
        </Routes>
      </shoppingCart.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
