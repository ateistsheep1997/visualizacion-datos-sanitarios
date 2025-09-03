const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('client/build'));

// Logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url} - Headers: ${JSON.stringify(req.headers)}`);
    next();
});

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