let express = require('express'); // retorna uma funçao

let app = express(); //express é uma função
let port = 80;

app.set("view engine", "ejs");

app.listen(port, function(){
    console.log('Server port: ', port);
});

module.exports = app;