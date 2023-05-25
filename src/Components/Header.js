import React from "react";

export default function Header() {
    return (
        <div className="header-container">
            <div className="nav-container">
                <div className="logo-container">
                    <p>CHAT BOX</p>
                    <span>DEMO</span>
                </div>

                <div className="menu-container">
                    <li className="menu">
                        <ul>Dashboard</ul>
                        <ul>Search</ul>
                        <ul>Setting</ul>
                        <ul className="current-user-name">Ethan Anderson</ul>
                    </li>
                </div>
            </div>
        </div>
    )
}