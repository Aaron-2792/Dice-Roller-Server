const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API to roll dice
app.get('/roll', (req, res) => {
    const numDice = parseInt(req.query.numDice) || 1;
    const numSides = parseInt(req.query.numSides) || 6;
    
    let results = [];
    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }
    
    res.json({ dice: results });
});

// Simple health check
app.get('/health', (req, res) => {
    res.send('Server is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
