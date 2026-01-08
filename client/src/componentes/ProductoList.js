import React from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './ProductoList.css';

const ProductoList = ({ productos, removeFromDom }) => {

  const eliminarProducto = (productoId) => {
    api.delete(`/producto/${productoId}`)
      .then(() => removeFromDom(productoId))
      .catch(err => console.error("Error al eliminar:", err));
  };

  return (
    <div>
      <h2>Todos los productos:</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
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
