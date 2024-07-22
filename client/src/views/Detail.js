import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { Link } from 'react-router-dom';


export default (props) => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => setProducto(res.data))
            .catch(error=>console.log('Error al recuperar productos:', error))
    }, [id]);
    return (
        <div class="product-detail">
            <h1 class="product-title">Detalle del Producto</h1>
            <div class="product-info">
            <p><strong>Título:</strong> {producto.Titulo}</p>
            <p><strong>Precio:</strong> {producto.Precio}{'Gs.'}</p>
            <p><strong>Descripción:</strong> {producto.Descripcion}</p>
            <Link to={"/producto/"+ producto._id +"/edit"}>
    Edit
</Link>


        </div>
        </div>
    );
}
