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
    
    const [quantityInput, setQuantityInput] = useState(<></>)
    const [incrimentButton, setIncrimentButton] = useState(<></>)
    const [decrimentButton, setDecrimentButton] = useState(<></>)
    const [isClicked, setIsClicked] = useState(false)
    const [displayQuantity, setDisplayQuantity] = useState(0)
    const [tempCart, setTempCart] = useState([])
        
    //Working on cart handler
    function handleAddToCart (item) {
        //set the temporary cart array which will contain an object with the new item the user has clicked on as well as the quantity of that item, initialized to 1.
        setTempCart(tempCart.push({...item, quantity: 1}))

        //Set incriment and decriment buttons for item.
        setDecrimentButton(<button onClick={()=>{decrimentProduct(tempCart)}}>-</button>)
        setIncrimentButton(<button onClick={()=>{incrimentProduct(tempCart)}}>+</button>)

        //This is an intermidiary array which will then be passed as the value of the new cart including all previous items the user has clicked on.
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart) 

        setIsClicked(true)
        setQuantityInput(<input id="item.id" type="text" placeholder="Quantity"></input>)
        setDisplayQuantity(tempCart[0].quantity)

        //Clear temp cart for next item.
        setTempCart([])

}

function incrimentProduct(tempCart){
    setTempCart(tempCart[0].quantity += 1);

}
function decrimentProduct(tempCart){
    setTempCart(tempCart[0].quantity -= 1);
}


console.log(cartItems)
// console.log(displayQuantity)

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
    {/* {isClicked?<label for="item.id">Edit quantity:</label>:null} */}
    {isClicked?quantityInput:null}
    {isClicked?<button>Update Quantity</button>:null}
    <br></br>
    <br></br>
    </div>
    </>
    )
}

export default StoreItems