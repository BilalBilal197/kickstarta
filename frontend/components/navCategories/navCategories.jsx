import React from "react"
import {Link} from "react-router-dom"


function NavCategories(){
    return (
        <nav className="categories-header">
            <Link to="/">Arts</Link>
            <Link to="/">Comics & Illustration</Link>
            <Link to="/">Design & Tech</Link>
            <Link to="/">Film</Link>
            <Link to="/">Food & Craft</Link>
            <Link to="/">Games</Link>
            <Link to="/">Music</Link>
            <Link to="/">Publishing</Link>
        </nav>

    )
}

export default NavCategories;