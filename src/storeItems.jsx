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
    
    const [quantityInput, setQuantityInput] = useState("")
    const [incrimentButton, setIncrimentButton] = useState(<></>)
    const [decrimentButton, setDecrimentButton] = useState(<></>)
    const [isClicked, setIsClicked] = useState(false)
    const [displayQuantity, setDisplayQuantity] = useState(0)
    const [tempCart, setTempCart] = useState([])
        
    //Working on cart handler
    function handleAddToCart (item) {
        setIsClicked(true)

        //set the temporary cart array which will contain an object with the new item the user has clicked on as well as the quantity of that item, initialized to 1.
        // let intermediaryCart = []
        // intermediaryCart.push({...item, quantity: 1})
        // console.log(intermediaryCart)
        
        //THIS LINE IS CAUSING ISSUES
        setTempCart(tempCart.push({...item, quantity: 1}))
        //Set incriment and decriment buttons for item.
        setDecrimentButton(<button onClick={()=>{decrimentProduct(tempCart)}}>-</button>)
        setIncrimentButton(<button onClick={()=>{incrimentProduct(tempCart)}}>+</button>)

        //This is an intermidiary array which will then be passed as the value of the new cart including all previous items the user has clicked on.
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart) 

        //find the index of the item in the cart that this input is for.
        let index = updatedCart.findIndex((eachItem)=>eachItem.id === item.id)

    //If the quantity of the current item is 0, then the product card will behave as though it hasn't been clicked by setting isClicked to false.
    cleanUp(item)

                //Clear temp cart for next item.
                setTempCart([])

}
// console.log(cartItems)

function incrimentProduct(tempCart){
    let tempCartCopy = [...tempCart];

    tempCartCopy[0].quantity += 1;

    setTempCart(tempCartCopy);
    setDisplayQuantity(tempCartCopy[0].quantity)
}

function decrimentProduct(tempCart, quantity){
    let tempCartCopy = [...tempCart];
    if(tempCartCopy[0].quantity > 0) {
        tempCartCopy[0].quantity -= 1;
    }

    setTempCart(tempCartCopy);
    setDisplayQuantity(tempCartCopy[0].quantity)
}

function updateAmount(e, item) {
    e.preventDefault()

    //find the index of the item in the cart that this input is for.
    let index = cartItems.findIndex((eachItem)=>eachItem.id === item.id)
    //Create a copy of the cart.
    let tempCartCopy = [...cartItems]

    //Set tempCartCopy's current item quantity to the value of the user input if greater than or equal to 0.  
    if(quantityInput >= 0) {
        tempCartCopy[index].quantity = parseInt(quantityInput, 10);
    }

    setDisplayQuantity(tempCartCopy[index].quantity)

    //Update the entire cart, including updating the current item's quantity.
    setCartItems(tempCartCopy)
    cleanUp(item)

}

function cleanUp(item){

    let index = cartItems.findIndex((eachItem)=>eachItem.id === item.id)

    if(cartItems[index].quantity === 0) {

        setIsClicked(false)
    }
}

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
    {isClicked?decrimentButton:null}
    {isClicked?incrimentButton:null}
    <br></br>
    <form>
    {isClicked?<label for="item.id">Edit quantity:</label>:null}
    {/* {isClicked?quantityInput:null} */}
    {isClicked?<input 
    id="item.id" 
    name="item.id" 
    type="number" 
    placeholder="Quantity"
    value={quantityInput}
    onChange={(e)=>setQuantityInput(e.target.value)}></input>:null}
    {isClicked?<button type="Submit" onClick={(e)=>{updateAmount(e, item)}}>Update Quantity</button>:null}
    </form>
    <br></br>
    <br></br>
    </div>
    {/* {isClicked?cleanUp(item):null} */}
    </>
    )
}

export default StoreItems