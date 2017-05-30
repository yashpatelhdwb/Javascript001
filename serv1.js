const express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('<h1>Welcome to home Page</h1>');
})

app.listen(3000, () => {
    console.log('Server is up and running at port 3000');
})