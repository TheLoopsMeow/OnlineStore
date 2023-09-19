import react from "react"
import App from "./App"
import NavBar from "./NavBar"
import Store from "./Store"
import {BrowserRouter, Router, Routes, Route, Link} from "react"

const homePageStyle = {
    verticalAlign: "top",
}
function HomePage () {
    return(
<>
<div style={homePageStyle}>
<NavBar />

</div>
<div>
    <h1>Home Page</h1>
<span>Welcome to my online store, where all of your product related hopes and dreams will come true!</span>
</div>
</>
    )
}

export default HomePage