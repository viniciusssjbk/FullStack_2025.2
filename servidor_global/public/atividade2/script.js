var numero = Math.random()*100;
numero = Math.floor(numero);
console.log(numero);



function chutar(){

    var chute = document.getElementById("valor").value;


    if(chute == numero){
        document.getElementById("tentativas").innerHTML = "Tentativa atual: "+chute;
        document.getElementById("tentativas").style.setProperty("background-color", "lime");
        document.getElementById("tentativas").style.setProperty("color", "white");
    }else{
        
        if(chute >= numero){
            document.getElementById("tentativas").innerHTML = "Tentativa atual: "+chute+" (O número é menor)";
        document.getElementById("tentativas").style.setProperty("background-color", "lightcoral");
        document.getElementById("tentativas").style.setProperty("color", "white");
            document.getElementById("tentativasgd").innerHTML += chute + ", ";
            document.getElementById("tentativasgd").style.setProperty("background-color", "lightcoral");
            document.getElementById("tentativasgd").style.setProperty("color", "white");
        }else{
            document.getElementById("tentativas").innerHTML = "Tentativa atual: "+chute+" (O número é maior)";
        document.getElementById("tentativas").style.setProperty("background-color", "lightcoral");
        document.getElementById("tentativas").style.setProperty("color", "white");
            document.getElementById("tentativaspq").innerHTML += chute + ", ";
            document.getElementById("tentativaspq").style.setProperty("background-color", "lightcoral");
            document.getElementById("tentativaspq").style.setProperty("color", "white");

        }
    }
}