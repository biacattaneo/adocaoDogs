const app = require('./config/server');

app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/login', function(req, res){
    res.render("login.ejs");
}) 

app.get('/cadastro', function(req, res){
    res.render("cadastro.ejs");
}) 

app.get('/minhaPagina', function(req, res){
    res.render("minhaPagina.ejs");
}) 