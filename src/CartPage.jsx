import react from "react"
import HomePage from "./HomePage"
import Store from "./Store"
import NavBar from "./NavBar"
import {useState, useContext, createContext} from "react"
import App, {shoppingCart} from "./App"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function CartPage () {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    console.log(cartItems)
    return(
        <>
        <NavBar />
        <br></br>
        <span>Please review your cart.</span>
        </>
    )

}

export default CartPage