const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/crmdb";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error MongoDB:", err));
