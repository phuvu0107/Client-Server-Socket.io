import React from 'react'
import './style.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light color container-fluid container">
            <div className="container-fluid">
                <a style={{ color: '#f25939', fontSize: '3rem', fontWeight: "bold"}} className="navbar-brand brand-title" href="/">Chat Now!</a>
            </div>
        </nav>
    )
}

export default Header