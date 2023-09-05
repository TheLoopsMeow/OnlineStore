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
        .then((r) => {
            setItems(r)
        })
    }, [])

    console.log(items)

return (
    <>
    <div>
    <NavBar />
    Welcome to the Store Page!
    </div>
    </>
)
}

export default Store