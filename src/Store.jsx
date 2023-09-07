import react, { useState, useEffect, createContext, useContext } from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import App, {shoppingCart} from "./App"
// import shoppingCart from "./StoreContext"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

const style5 = {
    width: "75%",
    align: "center"
}

const style6 = {
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
    // const [tempCart2, setTempCart2] = useState()

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
        const isInCart = tempCart.find((cartItem) => cartItem.id === item.id);
    
        if(!isInCart) {
            tempCart.push(item)
        }
        const currentIndex = (tempCart.findIndex((cartItem) => cartItem.id === item.id)) 

        //if it is a new item being added to the cart, add a new item to the array.
        if(quantityArray[currentIndex] == undefined){
            quantityArray.push(0)
        }

        //not working!
        //add item quantity to cart
        quantityArray[currentIndex] += 1 

        console.log("current Index is :" + currentIndex)
        console.log("item is :" + tempCart[currentIndex].title)
        console.log("number of items :" + quantityArray[currentIndex])

      
        let updatedCart = [...cartItems, ...tempCart]
        setCartItems(updatedCart)
    }



    function renderProductCards () {
        useEffect (()=>{           
            setCartItems(tempCart)
       }, []
       )

    //    console.log("cart items :" + cartItems)

            return items.map((item)=>{
            return(
                <div style={style6} key={item.id} >
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
    Welcome to the Store Page!
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