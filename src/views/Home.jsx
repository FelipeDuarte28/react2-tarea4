import React from 'react';
import '../assets/css/style.css';
import MyContext from "../context/MyContext";
import {useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Galeria from '../components/Galeria';


const Home = () => {


    return (
        <div>
            <div className="text-center py-5 pizza-background">
                <section className="text-white bg-dark bg-opacity-50">
                    <h1>Pizzeria Mamma Mia</h1>
                    <h4>Abbiamo le migliori pizze che puoi trovare!</h4>
                </section>
            </div>
            <section>
                <Galeria />
            </section>
        </div>
    )
}

export default Home