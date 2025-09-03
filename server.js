const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('client/build'));

app.get('/api/data', (req, res) => {
    // Handle fetching health data here.
    res.json({ message: 'Datos de salud en formato JSON' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});