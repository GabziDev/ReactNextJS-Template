import React from 'react'
import Link from "next/link";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <ul className="links">
                        <li className="list-item"><Link className="link" href="/">Home</Link></li>
                        <li className="list-item"><Link className="link" href="/un">Un</Link></li>
                        <li className="list-item"><Link className="link" href="/deux">Deux</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header