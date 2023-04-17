import React from 'react'
import MyContext from "../context/MyContext"
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CarritoContext from '../context/CarritoContext'

const Pizza = () => {
    const { pizza } = useParams();
    const pizzas = useContext(MyContext);
    const {carro, setCarro} = useContext(CarritoContext);

    const pizzaFilter = pizzas.find((tipo) => tipo.name === pizza);

    return (
        <div className="d-flex justify-content-center">
            <div key={pizzaFilter.id} className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pizzaFilter.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pizzaFilter.name}</h5>
                            <p className="card-text">{pizzaFilter.desc}</p>
                            <hr />
                            <p>Ingredientes: </p>
                            <ul>
                                {pizzaFilter.ingredients.map(ingrd => <li key={ingrd}> {ingrd} </li>)}
                            </ul>
                            <p>Precio: ${pizzaFilter.price}</p>
                            <button type="submit" className="btn btn-danger btn-sm" onClick={() => setCarro([...carro, pizzaFilter])}>Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pizza;