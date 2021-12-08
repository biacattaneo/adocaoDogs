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
app.get('/adocoes', (req,res)=>{
    // /something?color1=red&color2=blue
    // req.query.color
    var cpf = req.query.cpf;
    db.query(`SELECT * FROM adota WHERE cpf = '${cpf}'`).then((i)=>{
        res.send(JSON.stringify(i.rows));
    })
})
app.get('/get_cachorros', (req, res) => {
    db.query('SELECT * FROM cachorro').then((i)=>{
        res.send(JSON.stringify(i.rows));
    })

})
app.post('/set_cachorro', (req, res) => {
    console.log(req.body);
    db.query(`INSERT INTO cachorro (nome_cachorro,raça,foto,porte,idade,cpf) VALUES ('${req.body.dogName}','${req.body.dogRaca}','${req.body.dogImagem}','${req.body.dogPorte}','${req.body.dogIdade}','${req.body.cpfDoador}')`).then((error,results,fields)=>{
        console.log(results);
        res.sendStatus(200);
    });

});
app.post('/cadastrar', (req, res) => {
    console.log(req.body);
    db.query(`INSERT INTO usuario (cpf,nome_usuario,email,celular,senha,descricao) VALUES ('${req.body.Cpf}','${req.body.Name}','${req.body.Email}','${req.body.Contato}','${req.body.Senha}','${req.body.About}')`).then(()=>{
        res.sendStatus(200);
    });
})
app.post('/login', (req,res) =>{
    // console.log(req.body);
    db.query(`SELECT cpf FROM usuario WHERE email='${req.body.Email}' and senha='${req.body.Senha}'`, (err, result) => {
        if (result.rows.length>0){
            res.send(JSON.stringify(result.rows[0]));
            // res.sendStatus(200);
        }else{
            res.sendStatus(422);
        }

        console.log(result.rows);
    })
    // res.sendStatus(200);
})
app.post('/adota', (req,res) =>{
    console.log(req.body)
    db.query(`SELECT * FROM adota WHERE idcachorro='${req.body.idcachorro}'`, (err, result)=>{
        if(result.rows.length>0){
            res.send(JSON.stringify({message: 'Esse cachorro já foi adotado.',error: 'dog_already_adopted'}));
            console.log('Esse cachorro já foi adotado.');
        }
    })
    db.query(`INSERT INTO adota(cpf,idcachorro) VALUES ('${req.body.cpf}',${req.body.idcachorro})`, (err, result) => {
        console.log(err);
    })
})
app.listen(8888);