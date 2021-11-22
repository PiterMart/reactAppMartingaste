import React from 'react'
import './NavBar.css'

export const Nav = () => {
    return (
        <div>

            <ul className="navContainer">
                <li classname="list">HOME</li>
                <li classname="list">CATEGORIA A</li>
                <li classname="list">CATEGORIA B</li>
                <li classname="list">CATEGORIA C</li>

            </ul>
            <h1 className="title">ETERNAL GLORY</h1>
        </div>
    )
}

export default Nav;