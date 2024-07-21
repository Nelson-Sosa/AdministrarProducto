import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Actualizar.css';

export default (props) => {
    const { id } = useParams(); // Obtener el id de los parámetros de la URL
    const [Titulo, setTitulo] = useState('');
    const [Precio, setPrecio] = useState('');
    const [Descripcion, setDescripcion] = useState('');

    useEffect(() => {
        console.log(`Fetching product with id: ${id}`)
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => {
                setTitulo(res.data.Titulo);
                setPrecio(res.data.Precio);
                setDescripcion(res.data.Descripcion);
            })
            .catch(err => console.log(err));
    }, [id]);

    const actualizarProducto = e => {
        e.preventDefault();
        console.log(`Updating product with id: ${id}`);
        axios.put(`http://localhost:8000/api/producto/${id}`, {
            Titulo,
            Precio,
            Descripcion
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1>Actualizar Producto:</h1>
            <form onSubmit={actualizarProducto}>
                <div className="field">
                    <label className="label">Titulo</label>
                    <input 
                        type="text" 
                        name="Titulo" 
                        value={Titulo} 
                        onChange={(e) => setTitulo(e.target.value)}
                        className="input" 
                    />
                </div>
                <div className="field">
                    <label className="label">Precio</label>
                    <input 
                        type="number" 
                        name="Precio"
                        value={Precio} 
                        onChange={(e) => setPrecio(e.target.value)}
                        className="input" 
                    />
                </div>
                <div className="field">
                    <label className="label">Descripcion</label>
                    <input 
                        type="text" 
                        name="Descripcion"
                        value={Descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="input" 
                    />
                </div>
                <button type="submit" className="button">Actualizar</button>
            </form>
        </div>
    );
}
