import react from "react"
import App from "./App"
import NavBar from "./NavBar"
import Store from "./Store"
import './index.css'
import {useState, useContext, createContext} from "react"
import {shoppingCart} from "./App"

import {BrowserRouter, Router, Routes, Route, Link} from "react"

const homePageStyle = {
    verticalAlign: "top",
}
function HomePage () {
    const {cartItems, setCartItems} = useContext(shoppingCart)

    return(
<>
<nav style={homePageStyle}>
<NavBar />

</nav>
<div>
    <h1 className="homePageHeader"></h1>
<span className="homePage">Welcome to the Ambay Mall online boutique, <br></br><em>by Wyatt.</em></span>
</div>
</>
    )
}

export default HomePage