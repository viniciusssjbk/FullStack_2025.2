var http = require('http');
var express = require('express');
var  app = express();
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

var servidor = http.createServer(app);
servidor.listen(80);

console.log("Servidor rodando.......");

app.get('/', function(req, res){
    res.redirect("meu_site");
    
});
