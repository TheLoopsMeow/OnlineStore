import react from "react"
import HomePage from "./HomePage"
import Store from "./Store"
import NavBar from "./NavBar"

import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function CartPage () {
    return(
        <>
        <NavBar />
        <span>Welcome to your cart!</span>
        </>
    )

}

export default CartPage