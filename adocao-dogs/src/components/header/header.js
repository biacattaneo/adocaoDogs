import React from "react";
import './header.css';
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

const Header = () => {
    let cookies = new Cookies();
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/home" exact>Home</NavLink></li>
                    {
                        !cookies.get('logado') && <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
                    }
                    {
                        !cookies.get('logado') && <li><NavLink to="/login" exact>Login</NavLink></li>
                    }
                    {
                        cookies.get('logado') && <li><NavLink to="/cadastrodog" exact>Cadastrar um dog</NavLink></li>
                    }   
                    <li><NavLink to="/sobreNos" exact>Sobre Nós</NavLink></li>
                    {
                        cookies.get('logado') && <li><NavLink to="/sair" onClick={() => {cookies.remove('logado'); window.location.reload()}} exact>Sair</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;