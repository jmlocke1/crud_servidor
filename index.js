const express = require('express');
const conectarDB = require('./config/db');
// Creamos el servidor
const app = express();

// Conectamos a la base de datos
conectarDB();

// Definimos ruta principal
app.get('/', (req, res) => {
	res.send("Hola Mundo desde el servidor.");
});

app.listen(4000, () => {
	console.log("El servidor está corriendo perfectamente");
});