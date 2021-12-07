import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
export const Nav = () => {
    return (
        <div>
            <nav>
            <ul className="navContainer">
                <li className="list">HOME</li>
                <li className="list">CATEGORIA A</li>
                <li className="list">CATEGORIA B</li>
                <li className="list">CATEGORIA C</li>
                <CartWidget/>

            </ul>
            </nav>
            <h1 className="title">ETERNAL GLORY</h1>

        </div>

    )
}

export default Nav;