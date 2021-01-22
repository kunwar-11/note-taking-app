import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className = "header">
            <Link to = '/'>
                <h1 className = "header__heading">Keeper...</h1>
            </Link>
        </div>
    )
}

export default Header
