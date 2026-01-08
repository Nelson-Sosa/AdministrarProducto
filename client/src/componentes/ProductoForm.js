import React, { useState } from 'react';
import api from '../services/api';
import './ProductoForm.css';

const ProductoForm = () => {

  const [Titulo, setTitulo] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    api.post("/agregar/producto", {
      Titulo,
      Precio,
      Descripcion
    })
    .then(() => {
      setTitulo("");
      setPrecio("");
      setDescripcion("");
    })
    .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmitHandler} className='product-form'>
      <h2>Gerente de producto</h2>

      <p>
        <label>Titulo</label><br/>
        <input value={Titulo} onChange={e => setTitulo(e.target.value)} />
      </p>

      <p>
        <label>Precio</label><br/>
        <input type="number" value={Precio} onChange={e => setPrecio(e.target.value)} />
      </p>

      <p>
        <label>Descripcion</label><br/>
        <input value={Descripcion} onChange={e => setDescripcion(e.target.value)} />
      </p>

      <button>Crear</button>
    </form>
  );
};

export default ProductoForm;
