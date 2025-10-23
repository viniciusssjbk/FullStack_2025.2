// var nome = window.prompt("Digite seu nome: ");
// var idade = window.prompt("Digite sua idade: ");
// var ano_atual = window.prompt("Digite o ano atual: ");
// var ano_nascimento = ano_atual - idade;
// document.getElementById("resultado").innerHTML = "Olá seja bem vindo(a) " + nome + ", você nasceu em " + ano_nascimento;

function exibirMensagem(msg){
    console.log("Você digitou: " + msg);
}
function lista(numero){
    document.getElementById("resultado1").innerHTML ="";
    for(var i=1; i<=numero; i++){
        document.getElementById("resultado1").innerHTML += i + ", ";
    }
}
function somar(){
    let n1 = parseFloat(document.getElementById("NUMERO1").value);
    let n2 = parseFloat(document.getElementById("NUMERO2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "Resultado da soma: " + resultado;
}
function calculo(calculo1, calculo2){

    if(calculo1<=-1 || calculo2<=-1){
        document.getElementById("calculo").innerHTML = calculo1+calculo2;
    }else{
        document.getElementById("calculo").innerHTML = calculo1*calculo2;
    }
}