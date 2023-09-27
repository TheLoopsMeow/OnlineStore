
import react from "react"
import App from "./App"
import NavBar from "./NavBar"
import Store from "./Store"
import './index.css'
import {useState, useContext, createContext} from "react"
import {shoppingCart} from "./App"

function StoreItems ({item}) {
    const {cartItems, setCartItems} = useContext(shoppingCart)
    const [quantityInput, setQuantityInput] = useState("")
    const [incrimentButton, setIncrimentButton] = useState(<></>)
    const [decrimentButton, setDecrimentButton] = useState(<></>)
    const [isClicked, setIsClicked] = useState(false)
    const [displayQuantity, setDisplayQuantity] = useState(1)
    const [tempCart, setTempCart] = useState([])
    const [quantityWarning, setQuantityWarning] = useState("")
    const itemLimit = 40 
        
    //Working on cart handler
    function handleAddToCart (item) {
        //Set variable that determines behavior of product card.
        setIsClicked(true)

            //set the temporary cart array which will contain an object with the new item the user has clicked on as well as the quantity of that item, initialized to 1.
            const intermediaryCart = [{...item, quantity: 1}]

        //Set incriment and decriment buttons for item.
        setDecrimentButton(<button onClick={()=>{decrimentProduct(intermediaryCart)}}>-</button>)
        setIncrimentButton(<button onClick={()=>{incrimentProduct(intermediaryCart)}}>+</button>)

        const updatedCart = [...cartItems, ...intermediaryCart]

        //This is an intermidiary array which will then be passed as the value of the new cart including all previous items the user has clicked on.
        setCartItems(updatedCart) 

}

function incrimentProduct(tempCart){
    let tempCartCopy = [...tempCart];

    if(tempCartCopy[0].quantity > 0 && tempCartCopy[0].quantity <= itemLimit) {
        tempCartCopy[0].quantity += 1;
        setQuantityWarning("")

    }

    setTempCart(tempCartCopy);
    setDisplayQuantity(tempCartCopy[0].quantity)
}

function decrimentProduct(tempCart){
    let tempCartCopy = [...tempCart];
    if(tempCartCopy[0].quantity > 0 && tempCartCopy[0].quantity <= itemLimit) {
        tempCartCopy[0].quantity -= 1;
        setQuantityWarning("")

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

    //Set tempCartCopy's current item quantity to the value of the user input if greater than or equal to 0 and less than itemLimit.
    if(typeof(quantityInput) == "number" && quantityInput >= 0 && quantityInput <= itemLimit) {
        tempCartCopy[index].quantity = parseInt(quantityInput, 10);
        setQuantityWarning("")

    }
    else if (quantityInput < 0 || quantityInput > itemLimit){
        setQuantityWarning(<p className="error">Orders must be for between 0 and 40 of each item.</p>)
    }

    //Update the entire cart, including updating the current item's quantity.
    setCartItems(tempCartCopy)

    //Set the counter display for the item.
    let cartItemQuantityVar = tempCartCopy[index].quantity
    setDisplayQuantity(cartItemQuantityVar)

}

function cleanUp(item){

    //Get the index in cartItems of the currnet item.
    let index = cartItems.findIndex((eachItem)=>eachItem.id === item.id)
    //Delete the item from the cart if the quantity is 0.
    if(cartItems[index].quantity === 0) {
        setIsClicked(false)
        let cleanupCart = [...cartItems]
        cleanupCart.splice(index, 1)
        setCartItems(cleanupCart)
    }
}

//This is used to set the incriment button, decriment button, and quantity input when user leaves Store component and comes back.
function initializeProductCard(item){
    let index = cartItems.findIndex((eachItem)=>eachItem.id === item.id)
    if(index >= 0 && cartItems[index].quantity > 0){
        setIsClicked(true)
        setDecrimentButton(<button onClick={()=>{decrimentProduct(cartItems)}}>-</button>)
        setIncrimentButton(<button onClick={()=>{incrimentProduct(cartItems)}}>+</button>)
        setDisplayQuantity(1)
    }
}
return(
    
    <>
    {!isClicked?initializeProductCard(item):null}
    <div className="productCard" key={item.id}>
    <img className="image" src={item.image} alt={item.title} />
    <p className="cardHeader">{item.title}</p>
    <p>{item.description}</p>
    <p className="price" id={item.id}>${item.price}</p>
    <br></br><br></br>
    {!isClicked?<button onClick={()=>{handleAddToCart(item)}}>I fancy this.</button>:null}
    <br></br>
    {isClicked?<span className="price">Quantity:</span>:null}
    <br></br>
    <span className="price">{isClicked?displayQuantity:null}</span>
    <br></br>
    {isClicked?decrimentButton:null}
    {isClicked?incrimentButton:null}
    <br></br>
    <form>
    {isClicked?<label htmlFor="item.id">Edit quantity:</label>:null}
    <br></br>
    {isClicked?<input 
    id="item.id" 
    name="item.id" 
    type="number" 
    inputMode="numeric"
    pattern="[0-40]*"
    placeholder="Quantity"
    value={quantityInput}
    onChange={(e)=>setQuantityInput(parseInt(e.target.value))}></input>:null}
    <br></br>
    {isClicked?<button type="Submit" onClick={(e)=>{updateAmount(e, item)}}>Update Quantity</button>:null}
    </form>
    <br></br>
    {quantityWarning}
    <br></br>
    {/* If the quantity of the current item is 0, then the product card will behave as though it hasn't been clicked by setting isClicked to false. */}
    {isClicked?cleanUp(item):null}
    </div>

    </>
    )
    
}

export default StoreItems