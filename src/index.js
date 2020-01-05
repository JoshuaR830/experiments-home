const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/experiments.html`);
});

app.listen(8002, () => console.log('Listening on 8002!'))