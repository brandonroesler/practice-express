const express = require('express');
const app = express();

//Client sends a "get" request and this server is sending a response
app.get('/', function(req, res) {
    res.send('<h1>Party</h1>');
})

const Fruits = ['apple', 'banana', 'mango', 'cherry', 'pear'];

app.get('/fruits', function(req, res) {
    res.send(Fruits);
})








app.listen(3000, () => {
    console.log('This server is party');
})