import React from "react";
import logo from "../../assets/Background.png"

import "./Header.css"

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul className="topnav">
                <li><a className="logo" href="#"><img className="imgLogo" src={logo} alt="" /></a></li>
                <div className="right">
                    <li><Link to="/">Currículo</Link></li>
                    <li><Link to="/Portfolio">Portfólio</Link></li>
                    <li><Link to="/Contact">Contato</Link></li>
                </div>
            </ul>
    </header>
    )
}

export default Header;