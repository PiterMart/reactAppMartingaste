import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
export const Nav = () => {
    return (
        <div>
            <nav>
            <ul className="navContainer">
                <li classname="list">HOME</li>
                <li classname="list">CATEGORIA A</li>
                <li classname="list">CATEGORIA B</li>
                <li classname="list">CATEGORIA C</li>
                <CartWidget/>

            </ul>
            </nav>
            <h1 className="title">ETERNAL GLORY</h1>

        </div>

    )
}

export default Nav;