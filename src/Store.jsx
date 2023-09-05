import react from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function Store () {
return (
    <>
    <div>
    <NavBar />
    Welcome to the Store Page!
    </div>
    </>
)
}

export default Store