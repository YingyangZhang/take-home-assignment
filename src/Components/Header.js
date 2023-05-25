import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <div className="nav-container">
                <Link to='/' exact='true' className="logo-container">
                    <p>CHAT BOX</p>
                    <span>DEMO</span>
                </Link>

                <div className="menu-container">
                    <li className="menu">
                        <Link to='/' exact='true'><ul>Dashboard</ul></Link>
                        <Link to='/search' exact='true'><ul>Search</ul></Link>
                        <ul className="current-user-name">Ethan Anderson</ul>
                    </li>
                </div>
            </div>
        </div>
    )
}