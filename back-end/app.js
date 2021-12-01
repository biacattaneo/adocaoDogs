const express = require('express');
const db = require('./config/dbconnection')
var cors = require('cors');

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        teste: 1,
        nome: 'Victor Mazzotti'
    }));
})
app.get('/get_cachorros', (req, res) => {
    db.query('SELECT * FROM cachorro').then((i)=>{
        res.send(JSON.stringify(i.rows));
    })

})
app.post('/set_cachorro', (req, res) => {
    console.log(req.body);
    db.query(`INSERT INTO cachorro (nome_cachorro,raça,foto,porte,idade) VALUES ('${req.body.dogName}','${req.body.dogRaca}','${req.body.dogImagem}','${req.body.dogPorte}','${req.body.dogIdade}')`).then(()=>{
        res.sendStatus(200);
    });

});

app.listen(8888);