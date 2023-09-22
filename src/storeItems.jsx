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
    const [isClicked, setIsClicked] = useState(false)
    const [displayQuantity, setDisplayQuantity] = useState(0)
        
    //Working on cart handler
    function handleAddToCart (item) {
        tempCart.push({...item, quantity: 1}) 
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart)   
        setDecrimentButton(<button>-</button>)
        setIncrimentButton(<button>+</button>)
        setShowButtons(true)
        setIsClicked(true)
        setQuantityInput(<input id="item.id" type="text" placeholder="Quantity"></input>)
        setDisplayQuantity(1)

}



console.log(cartItems)
console.log(displayQuantity)

return(
    
    <>
    <div style={style6} key={item.id}>
    <img style={style5} src={item.image} alt={item.title} />
    <p>{item.title}</p>
    <p>{item.description}</p>
    <p id={item.id}>${item.price}</p>

    {/* WORKING ON THIS */}
    {!isClicked?<button onClick={()=>{handleAddToCart(item)}}>Add to cart!</button>:null}
    <br></br>
    {isClicked?<span>Quantity:</span>:null}
    {isClicked?displayQuantity:null}
    {decrimentButton}
    {incrimentButton}
    <br></br>
    {isClicked?<label for="item.id">Edit quantity:</label>:null}
    {isClicked?quantityInput:null}
    {isClicked?<button>Update Quantity</button>:null}
    <br></br>
    <br></br>
    </div>
    </>
    )
}

export default StoreItems