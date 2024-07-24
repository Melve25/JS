// app1.js
const express = require('express');
const app = express();
const port = 3000;

// Route to display group names at the home page
app.get('/', (req, res) => {
    res.send('<h1>Group Names</h1><ul><li>Group 1</li><li>Group 2</li><li>Group 3</li></ul>');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
