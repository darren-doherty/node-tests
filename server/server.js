const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/404', (req, res) => {
    res.status(404).send({
        error: 'Page not found'
    });
});

app.get('/users', (req, res) => {
    var users = [
        {
            name: 'Darren Doherty',
            age: 34
        },
        {
            name: 'John Smith',
            age: 33
        }
    ];
    res.send(users);
});

app.listen(3000);

module.exports.app = app;