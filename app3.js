// app3.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Helper function to read and write JSON data
const readData = () => {
    return JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
};

const writeData = (data) => {
    fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 2), 'utf8');
};

// CREATE
app.post('/data', (req, res) => {
    let data = readData();
    let newItem = req.body;
    data.push(newItem);
    writeData(data);
    res.status(201).send('Item added');
});

// UPDATE
app.put('/data/:id', (req, res) => {
    let data = readData();
    let itemId = parseInt(req.params.id);
    let itemIndex = data.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        data[itemIndex] = req.body;
        writeData(data);
        res.send('Item updated');
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE
app.delete('/data/:id', (req, res) => {
    let data = readData();
    let itemId = parseInt(req.params.id);
    let newData = data.filter(item => item.id !== itemId);
    
    if (newData.length !== data.length) {
        writeData(newData);
        res.send('Item deleted');
    } else {
        res.status(404).send('Item not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
