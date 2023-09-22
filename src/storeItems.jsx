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
    const [incrimentButton, setIncrimentButton] = useState(false)
    const [decrimentButton, setDecrimentButton] = useState(false)
    const [test, setTest] = useState("")
    let tempCart = []
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [quantityInput, setQuantityInput] = useState(<></>)

        
    //Working on cart handler
    function handleAddToCart (item) {
        tempCart.push({...item, quantity: 1, incriment: <button>-</button>, decriment: true})
        
        let updatedCart = [...cartItems, ...tempCart]

        setCartItems(updatedCart)   
        
        changeQuantity(item)
        setIsButtonClicked(true)

       
            if(isButtonClicked){
                setDecrimentButton(true)
                setIncrimentButton(true)
            }


}

//renders the button to incriment, decriment, or input quantity of item
function changeQuantity(item) {
    
            console.log("working function")
            useEffect(()=>{
                
                setTest("test")
            })
}

console.log(cartItems)
console.log(test)
console.log(isButtonClicked)
console.log(incrimentButton)


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
    {decrimentButton?<button>test</button>:null}
    {incrimentButton?<button>test</button>:null}
    <br></br>
    <br></br>
    </div>
    </>
    )
}

export default StoreItems