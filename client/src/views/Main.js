import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductoForm from '../componentes/ProductoForm';
import ProductoList from '../componentes/ProductoList';

const App = () => {
    const [productos, setProductos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos')
            .then(res => {
                setProductos(res.data);
                setLoaded(true);
            })
            .catch(error => console.error('Error al recuperar productos:', error));
    }, []);

    const removeFromDom = productoId => {
        setProductos(productos.filter(producto => producto._id !== productoId));
    };

    return (
        <div>
            <ProductoForm />
            <hr />
            {loaded && <ProductoList productos={productos} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default App;
