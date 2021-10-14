import React from "react";
import './header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/home" exact>Home</NavLink></li>
                    <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
                    <li><NavLink to="/login" exact>Login</NavLink></li>
                    <li><NavLink to="/cadastrodog" exact>Cadastrar um dog</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;