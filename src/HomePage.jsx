import react from "react"
import App from "./App"
import NavBar from "./NavBar"
import Store from "./Store"
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
    <h1>Home Page</h1>
<span>Welcome to my online store, where all of your product related hopes and dreams will come true!</span>
</div>
</>
    )
}

export default HomePage