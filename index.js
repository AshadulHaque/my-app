const express = require('express');

const app = express();
const port = 3000;

app.post('/', (req, res) => {
    res.send('Hello World!');
});
app.put('/about', (req, res) => {
    res.send('Hi, World!');
});
app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);  // log to console that server is running
});