const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('./config/mongoose.config');

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://administrar-producto.vercel.app"
  ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/producto.routes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
