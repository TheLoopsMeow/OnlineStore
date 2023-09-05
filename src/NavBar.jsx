import react from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import Store from "./Store"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function NavBar () {
    return (
        <>
    <span>
        <Link to="/">Home Page</Link>
    </span>
    <span>   |    
        <Link to="/Store">Store</Link>
    </span>
    <span>   |    
        <Link to="/CartPage">Cart Page</Link>
    </span>
    <span>
        {/* <Link to="" component={}></Link> */}
    </span>
    </>
    )

}

export default NavBar