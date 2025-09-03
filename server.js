const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('client/build'));

app.get('/api/data', (req, res) => {
    // Handle fetching health data here.
    res.json({ message: 'Health data in JSON format' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});