import react from "react"
import HomePage from "./HomePage"
import Store from "./Store"
import NavBar from "./NavBar"
import {useState, useContext, createContext} from "react"
import App, {shoppingCart} from "./App"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function CartPage () {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    //The variable for the total amount due in the cart for all items.
    let total = 0;

    //Determines the total.
    cartItems.forEach((item)=>{
        total = total + (item.price * item.quantity)
    })

    //Converts the total to a string.
    let stringTotal = "$" + total.toLocaleString()

    console.log(cartItems)
    console.log(total)

    return(
        <>
        <NavBar />
        <br></br>
        <span>Please review your cart.</span>
        {renderCartProductCards(cartItems)}
        <p>Total: {addZero(stringTotal)}</p>
        </>

    )

    //This function will add a zero to the display of a total if there is only 1 decimal.  This addZero function is used instead of toFixed, since toLaaleString() is being used.
    function addZero(totalString){
        let index = totalString.indexOf(".")
            if(totalString[index+1] === totalString[totalString.length-1]){
                return totalString + "0"
            }
            else{
                return totalString
            }
    }

    function renderCartProductCards(cartItems){
       return (
        cartItems.map((item)=>{
            let itemTotal = item.quantity * item.price

            let itemTotalString = "$" + itemTotal.toLocaleString()


            return(
                <>
                <br></br>
                <p>{item.title}</p>
                <p>${item.price} each x {item.quantity}</p>
                <p>{addZero(itemTotalString)}</p>
                <img width="50px" src={item.image}></img>
                </>
            )
        })
       ) 
    }


}

export default CartPage