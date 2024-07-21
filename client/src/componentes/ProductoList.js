import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductoList.css';


const ProductoList = ({ productos, removeFromDom }) => {
    const eliminarProducto = (productoId) => {
        axios.delete('http://localhost:8000/api/producto/' + productoId)
            .then(res => {
                removeFromDom(productoId);
            })
            .catch(error => console.error('Error al eliminar producto:', error));
    };

    return (
        <div>
            <h2>Todos los productos:</h2>
            <ul>
                {productos.map((producto, idx) => (
                    <li key={idx}>
                        <Link to={`/producto/${producto._id}`}>
                            {producto.Titulo}
                        </Link>
                        <button onClick={() => eliminarProducto(producto._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductoList;
