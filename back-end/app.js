const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({origin: true, credentials: true}));

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        teste: 1,
        nome: 'Victor Mazzotti'
    }));
})

app.listen(8888);