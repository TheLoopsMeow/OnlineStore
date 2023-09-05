import react, { useContext } from "react"
import HomePage from "./HomePage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import {useEffect} from "react"
import {useState} from "react"
import {BrowserRouter, Router, Routes, Link} from "react-router-dom"

function Store () {

    const [items, setItems] = useState([])

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products`)
        .then(r => r.json())
        .then((product) => {
            setItems(product)
        })
    }, [])

    // console.log(items)

    function renderProductCards () {
            return items.map((item)=>{
            return(<>
            <div>{item.title}</div><br></br>
            <div>{item.description}</div><br></br>
            <div>${item.price}</div><br></br>
            </>)
        })
        
    }
    

return (
    <>
    <div>
    <NavBar />
    Welcome to the Store Page!
    <br></br>
    {renderProductCards()}
    {}
    </div>
    </>
)
}

export default Store