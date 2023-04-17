import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./context/MyContext";
import Home from "./views/Home";
import Pizza from "./views/Pizza.jsx";
import Carrito from "./views/Carrito"
import CarritoContext from "./context/CarritoContext";


function App() {

    const [pizzas, setPizzas] = useState([]);
    const [carro, setCarro] = useState([])

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        try {
            let res = await fetch('/pizzas.json');
            let data = await res.json();
            setPizzas(data);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <MyContext.Provider value={pizzas}>
                <CarritoContext.Provider value={{carro, setCarro}}>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/pizzas/:pizza" element={<Pizza />} />
                            <Route path="/carrito" element={<Carrito />} />
                        </Routes>
                    </BrowserRouter>
                </CarritoContext.Provider>
            </MyContext.Provider>
        </div>
    );
}

export default App;
