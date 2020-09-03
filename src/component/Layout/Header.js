import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#3d405b',
    textAlign: 'center',
    padding: '10px',
    color: 'white'
}
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

export default Header; 