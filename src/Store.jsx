import react, { useState, useEffect, createContext, useContext } from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import App, {shoppingCart} from "./App"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

const style5 = {
    width: "66%",
    align: "center"
}

const style6 = {
    backgroundColor: "black",
    width: "25%",
    display: "inline-grid",
    padding: "1em",
    border: "2px solid yellow",
    borderRadius: "12px",
}

function Store () {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    let tempCart = []
    const [isLoading, setIsLoading] = useState(true)

    let quantityArray = [0]

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

    
    //Working on cart handler
    function handleAddToCart (item) {
        tempCart.push(item.title)
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart)
    }

    console.log(cartItems)

    function renderProductCards () {
        useEffect (()=>{           
            setCartItems(tempCart)
       }, []
       )
            return items.map((item)=>{
            return(
                <div style={style6} key={Math.random()} >
                <img style={style5} src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={()=>{handleAddToCart(item)}}>Add to cart!</button>
                <br></br>
                <br></br>
              </div>
                
            ) 
        })
    }
    
return (
    <>
    <div>
    <NavBar />
    <br></br>
    Have a look around!
    <br></br>
    <br></br>
    {isLoading ? <div>Loading ...</div> : null}

    {renderProductCards()}
    {}
    </div>
    </>
)
}

export default Store