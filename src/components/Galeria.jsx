import { useContext } from "react";
import MyContext from "../context/MyContext";
import CarritoContext from "../context/CarritoContext";
import { useNavigate } from 'react-router-dom';

export default function Galeria() {

    const pizzas = useContext(MyContext)

    const {carro, setCarro} = useContext(CarritoContext);

    const navigate = useNavigate();

    return (

        <div className="row row-cols-1 row-cols-md-5 g-4 p-5">
            {pizzas.map(info =>
                <div key={info.id} className="col">
                    <div className="card h-100">
                        <img src={info.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>{info.name.charAt(0).toUpperCase() + info.name.slice(1)}</h4>
                            <hr />
                            <p className="card-text">Ingredientes: </p>
                            <ul>
                                {info.ingredients.map(ingrd =>
                                    <li key={ingrd}>{ingrd}</li>
                                )}
                            </ul>
                        </div>
                        <div className="card-body border-top">
                            <p className="text-center">${info.price}</p>
                            <div className="d-flex justify-content-evenly">
                                <button className="btn btn-info btn-sm" onClick={() => navigate(`/pizzas/${info.name.toLowerCase()}`)}>Ver más</button>
                                <button type="submit" className="btn btn-danger btn-sm" onClick={() => setCarro([...carro, info])}>Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>


    );
}
