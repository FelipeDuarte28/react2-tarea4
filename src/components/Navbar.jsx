import React from 'react'
import { NavLink } from 'react-router-dom';
import pizza from '../assets/icon/pizza.svg'

const Navbar = () => {

    const setActiveClass = ({ isActive }) => (
        isActive ?
            "nav-link active text-white"
            : "nav-link text-black"
        );

    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/home" className={setActiveClass}>
                            <img src={pizza} alt="pizza" width="30px" /> Pizzería Mamma Mía!
                        </NavLink>
                    </div>
                </div>
                <NavLink to="/carrito" className={setActiveClass}>
                    <i className="bi bi-cart" /> Carrito
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar