let idades = [18,20];
console.log(idades);
idades.push(10);
idades.push(60);
console.log(idades);
let popidade = idades.pop();
console.log(idades);
console.log(popidade);
delete idades[1];
console.log(idades);

var cor = "blue"


var carro_1 ={
    posicao: 0,
    cor : "red",
    modelo: "Corola",
    buzinar: function(){
        console.log("bii bii")
    },
    andar: function(posicao){
        this.posicao += posicao
    }
};
var carro_2 ={
    posicao: 0,
    cor : "red",
    modelo: "fusca",
    buzinar: function(){
        console.log("fom fom")
    },
    andar: function(posicao){
        this.posicao += posicao
    }
};
carro_1.buzinar();
console.log(carro_1.cor);
carro_1.cor = cor;
console.log(carro_1.cor);
console.log(carro_1.posicao);
carro_1.andar(3);
console.log(carro_1.posicao);


var carro = [carro_1,carro_2]
for (var i = 0; i < carro.length; i++) {
    console.log(carro[i].modelo)
    carro[i].buzinar()
    
}

var retangulo = {
    lw:2,
    canvas: document.getElementById("canvas"),
    ctx : this.canvas.getContext("2d"),
    corpreenchimento: "blue",
    corlinha: "red",
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    desenho: function(){
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lw;
    this.ctx.fillStyle = this.corpreenchimento;
    this.ctx.strokeStyle = this.corlinha;
    this.ctx.fillRect(this.x,this.y,this.largura,this.altura);
    this.ctx.strokeRect(this.x,this.y,this.largura,this.altura);
    }

}
var bola ={
    x:0,
    y:0,
    raio: 0,
    img: new Image(),
    desenha: function(){
        this.img.src ='bola.jpg';
        retangulo.ctx.beginPath();
        retangulo.ctx.drawImage(this.img,this.x,2*this.raio);
        retangulo.ctx.closePath();
    }
}
function animacao(){
    retangulo.ctx.clearRect(0,0,400,400)
    
    addEventListener("mousemove", function(evento){
        let rect = retangulo.canvas.getBoundingClientRect();
        x_mouse = evento.clientX - rect.left;
        y_mouse = evento.clientY - rect.top;
        bola.x = x_mouse;
        bola.y = y_mouse;
       
    
    })
    bola.desenha();    
  


requestAnimationFrame(animacao);
}
animacao()