let express = require('express');

let app = express()

app.get('/', (req, res) => {
    res.send('Salut, tu es à la racine !')
}).get('/demo', (req, res) => {
    res.send('Salut, tu es sur la demo !')
}).listen(8080)