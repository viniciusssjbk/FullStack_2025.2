var http = require('http');
var express = require('express');
var  app = express();
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri, { useNewUrlParser: true });
/*metodo post*/ 
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', './views');
var servidor = http.createServer(app);
servidor.listen(80);

console.log("Servidor rodando.......");

app.get('/', function(req, res){
    res.redirect("meu_site/projects.html");
    
});

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

app.post("/cadastrar_usuario", function(req, resp) {
    var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
   
 });

 app.post("/login_usuario", function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };

      usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };
    });

  });



app.get("/cadastrar", function(req, resp) {
    resp.redirect("/atividade_template/cadastro.html");
});
app.post("/usuario_cad_status", function(req, resp) {
    resp.render('resposta', {status: "cadastrado com sucesso!", nome: req.body.nome, telefone: req.body.telefone, email: req.body.email, senha: req.body.senha})
});


app.post("/usuario_login_status", function(req, resp) {
    resp.render('resposta2', {status: "logado com sucesso!", email: req.body.email, senha: req.body.senha})
});
app.get("/login", function(req, resp) {
    resp.redirect("/atividade_template/login.html");
});
