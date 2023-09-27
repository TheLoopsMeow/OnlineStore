import react, { createContext, useState, useEffect, useContext } from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import './App.css'

import App, {shoppingCart} from "./App"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"
import StoreItems from "./storeItems"



function Store () {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    let tempCart = []
    const [isLoading, setIsLoading] = useState(true)



    //Used to render the items that can be purchased, difine by the API.
    const [items, setItems] = useState([])

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products`)
        .then(r => r.json())
        .then((product) => {
            setItems(product)
            setIsLoading(false)
        })
    }, [])



    function renderProductCards () {

          return(
            items.map((item)=>{
                    return(
                        <>
                        <span>
                        <StoreItems item={item}  />
                        </span>
                        </>
                           )
            
                })    
          )
    }
   
    
return (
    <>
    <div>
    <NavBar />
    <br></br>
    <h1 className="storeHeader">Kindly, peruse our fine offerings!</h1>
    <br></br>
    <br></br>
    {isLoading ? <div className="loading">Preparing all the greatest merchandise...</div> : null}
    <div className="container">{renderProductCards()}</div>
    </div>
    </>
)
}

export default Store