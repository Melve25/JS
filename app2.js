// app2.js
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

// Route to display JSON contents
app.get('/data', (req, res) => {
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
