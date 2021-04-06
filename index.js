const express = require('express');
const checkAvito = require('./modules/check-avito');

const app = express();
const PORT = process.env.PORT || 5002;

app.get('/',(req, res) => {
    res.send('Parser work')
});

app.listen(PORT, async () => {
    setInterval(() => {
        checkAvito();
    }, 30 * 60 * 1000)
    console.log(`Server started!!! on port - ${PORT}`)
});