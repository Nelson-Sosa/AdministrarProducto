import React, { useState } from 'react'
import axios from 'axios';
import './ProductoForm.css';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [Titulo, setTitulo] = useState(""); 
    const [Precio, setPrecio] = useState("0");
    const [Descripcion, setDescripcion] = useState("")

    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear un nuevo prodcuto
        axios.post('http://localhost:8000/api/agregar/producto', {
            Titulo,
            Precio,
            Descripcion
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar el Titulo Precio Descripcion
    return (
        <form onSubmit={onSubmitHandler} className='product-form'>
            <h2>Gerente de producto</h2>
            <p>
                <label>Titulo</label><br/>
                <input type="text" onChange = {(e)=>setTitulo(e.target.value)} value={Titulo}/>
            </p>
            <p>
                <label>Precio</label><br/>
                <input type='number' onChange = {(e)=>setPrecio(e.target.value)} value={Precio}/>
            </p>
            <p>
                <label>Descripcion</label><br/>
                <input type='text' onChange = {(e)=>setDescripcion(e.target.value)} value={Descripcion}/>
            </p>
            <input type="submit" value="Crear"/>
        </form>
    )
}
