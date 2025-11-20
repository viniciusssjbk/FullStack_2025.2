var http = require('http');
var express = require('express');
var  app = express();
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://viniciusssjbk:Celtapreto01@cluster0.j4u2oxb.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true });
/*metodo post*/ 
let bodyParser = require("body-parser");
const { url } = require('inspector');
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






var postagem = dbo.collection("blog");




app.get("/blog", function(req, resp) {
 
    postagem.find({}).toArray(function(err, items) {
      console.log(items);
      resp.render('blog', {postagem: items})
       
    });


  });
app.get("/cadastrar_blog", function(req, resp) {
    resp.redirect("/blog/cadastrar_post.html");
});


app.post("/criando_post", function(req, resp) {
    var post = {bd_titulo: req.body.titulo, bd_resumo: req.body.resumo, bd_conteudo: req.body.conteudo};
    postagem.insertOne(post, function (err) {
      if (err) {
        resp.render('poste_criado', {resposta: "Erro ao cadastrar a postagem!"})
      }else {
        resp.render('poste_criado', {resposta: "postagem cadastrada com sucesso"})        
      };
    }); 

});

app.post("/atualizar_usuario", function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };
    var newData = { $set: {db_senha: req.body.nova_senha} };

    usuarios.updateOne(data, newData, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao atualizar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário atualizado com sucesso!"})        
      };
    });
   
  });

  app.post("/remover_usuario", function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };
   
    usuarios.deleteOne(data, function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao remover usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário removido com sucesso!"})        
      };
    });

  });



var carro_usuario = dbo.collection("carro");


  /*cadastro de usuario carro */
app.post("/usuario_cad_carro", function(req, resp) {

  var usuario = {
    usuario: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    senha: req.body.senha
  };

  carro_usuario.insertOne(usuario, function (err) {
    if (err) {
      resp.render('erro_carro', {resposta: "Erro ao cadastrar o usuario!"});
    } else {
      resp.redirect("/carros/login.html");
    }
  });
});

app.post("/usuario_login_carro", function(req, resp) {

  var usuario = {
    email: req.body.email,
    senha: req.body.senha
  };

  carro_usuario.findOne({ email: usuario.email, senha: usuario.senha }, function(err, user) {

    if (err || !user) {
      resp.render('erro_carro', {resposta: "Usuario não encontrado"});
    } else {
      resp.redirect("/carros/menu.html");
    }
  });

});


/*Cadastro para carros */

var carro = dbo.collection("carro2");



app.post("/cadastrar_carro", function(req, resp) {

  var carrinho = {
    modelo: req.body.modelo,
    ano: req.body.ano,
    preco: req.body.preco,
     quant: req.body.quant,
  };

  carro.insertOne(carrinho, function (err) {
    if (err) {
      resp.render('erro_carro', {resposta: "Erro ao cadastrar o carro!"});
    } else {
      resp.redirect("/carros/menu.html");
    }
  });
});

app.post("/atualizar_carro", function(req, resp) {
    var carrinho = { modelo: req.body.modelo, ano: req.body.ano };
    var novocarrinho = { $set: {preco: req.body.preco, quant: req.body.quant} };

    carro.updateOne(carrinho, novocarrinho, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resp.render('erro_carro', {resposta: "Carro não encontrado!"})
      }else if (err) {
        resp.render('erro_carro', {resposta: "Erro ao atualizar o carro!"})
      }else {
       resp.redirect("/carros/menu.html");       
      };
    });
   
  });

  app.post("/remover_carro", function(req, resp) {
    var carrinho = { modelo: req.body.modelo, ano: req.body.ano };
   
    carro.deleteOne(carrinho, function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resp.render('erro_carro', {resposta: "Carro não encontrado!"})
      }else if (err) {
        resp.render('erro_carro', {resposta: "Erro ao remover o carro!"})
      }else {
        resp.redirect("/carros/menu.html");      
      };
    });

  });
  app.get("/vender",function(req,res){

     carro.find({}).toArray(function(err, items) {
      console.log(items);
      res.render('vender', {carro: items})
     });
  
  })



  app.post("/comprar", function (req, res) {

  var carrinho = {
    modelo: req.body.modelo,
    ano: req.body.ano
  };
  console.log(carrinho);

 
  carro.findOne({ modelo: carrinho.modelo, ano: carrinho.ano }, function (err, user) {


    if (err || !user) {
      return res.render("erro_carro", { resposta: "Carro não encontrado." });
    }

    if (user.quant === 0) {
      return res.render("erro_carro", { resposta: "Infelizmente esse carro está esgotado." });
    }
    var quantnova = user.quant - 1;

  
    carro.updateOne(
      { modelo: carrinho.modelo, ano: carrinho.ano },
      { $set: { quant: quantnova } },
      function (err, result) {
        res.redirect("/vender");
      }
    );
  });
});

