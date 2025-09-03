const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('client/build'));

app.get('/api/data', (req, res) => {
    // Sample health data
    const healthData = {
        heartRate: 72,
        bloodPressure: '120/80',
        temperature: 98.6
    };
    res.json(healthData);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});