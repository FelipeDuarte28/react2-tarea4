import React from 'react'
import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const Home = () => {
    const {carro, setCarro} = useContext(CarritoContext);

    return (
        <div>
            <h3 className="text-center">Total: ${carro.length > 0 ? (carro.reduce((total, info) => total + info.price, 0)) : 0}</h3>
            <table className="table table-striped table-hover shadow-lg">
                <thead className="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Imagen referencia</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {carro.length > 0 ?
                        carro.map((info, key) =>
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td><img src={info.img} style={{width: "100px"}}alt="..." /></td>
                                <td>{info.name}</td>
                                <td>${info.price}</td>
                            </tr>
                        ) :
                        <tr>
                            <td>UPS parece que no has agregado pizzas</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home