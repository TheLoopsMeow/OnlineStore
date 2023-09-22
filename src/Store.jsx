import react, { createContext, useState, useEffect, useContext } from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
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
        useEffect (()=>{           
            setCartItems(tempCart)
        }, [])
          return(
            items.map((item)=>{
                return(
            <>
            <StoreItems key={item.id} item={item} />
            </>
                )
                })
                
          )
       
    }
   
    
return (
    <>
    <div key={Math.random()}>
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