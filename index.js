const express = require('express');

// Creamos el servidor
const app = express();

// Definimos ruta principal
app.get('/', (req, res) => {
	res.send("Hola Mundo desde el servidor.");
});

app.listen(4000, () => {
	console.log("El servidor está corriendo perfectamente");
});