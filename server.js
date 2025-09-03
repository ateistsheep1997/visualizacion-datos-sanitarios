const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('client/build'));

app.get('/api/data', (req, res) => {
    // Aquí se manejaría la obtención de los datos sanitarios.
    res.json({ message: 'Datos de salud JSON' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});