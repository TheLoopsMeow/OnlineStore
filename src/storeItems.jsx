import { useState } from 'react'
import './App.css'
import {BrowserRouter, Router, Routes, Route, Link } from "react-router-dom"
import {useContext, createContext, useEffect} from "react"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Store from "./Store"
import CartPage from "./CartPage"
import App, {shoppingCart} from "./App"



const style5 = {
    width: "66%",
    align: "center"
}

const style6 = {
    backgroundColor: "black",
    width: "30%",
    display: "inline-grid",
    padding: "1em",
    border: "2px solid darkblue",
    borderRadius: "12px",
}

function StoreItems ({item}) {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    let tempCart = []
    const [quantityInput, setQuantityInput] = useState(<></>)
    const [incrimentButton, setIncrimentButton] = useState(<></>)
    const [decrimentButton, setDecrimentButton] = useState(<></>)
    const [showButtons, setShowButtons] = useState(false)

        
    //Working on cart handler
    function handleAddToCart (item) {
        tempCart.push({...item, quantity: 1, incriment: <button>-</button>, decriment: true}) 
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart)   
        setDecrimentButton(<button>-</button>)
        setIncrimentButton(<button>+</button>)
        setShowButtons(true)
}



console.log(cartItems)
console.log(decrimentButton)


return(
    
    <>
    <div style={style6} key={item.id}>
    <img style={style5} src={item.image} alt={item.title} />
    <p>{item.title}</p>
    <p>{item.description}</p>
    <p id={item.id}>${item.price}</p>

    {/* WORKING ON THIS */}
    <button onClick={()=>{handleAddToCart(item)}}>Add to cart!</button>
    <br></br>
    {decrimentButton}
    {incrimentButton}
    <br></br>
    <br></br>
    </div>
    </>
    )
}

export default StoreItems