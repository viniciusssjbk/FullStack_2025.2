var carro={
    x: 0,
    canvas: document.getElementById("canvas"),
    y: 0,
    tamanho: 150,
    imagem: new Image(),
    gerar: function(){
    var ctx = this.canvas.getContext("2d");
    this.imagem.src="carrinho.png";
    addEventListener("mousemove", function(evento){
        rect = carro.canvas.getBoundingClientRect();
        x_mouser = evento.clientX - rect.left,
        y_mouser = evento.clientY - rect.top;
        

        carro.x = x_mouser-carro.tamanho/2;
        carro.y = y_mouser-carro.tamanho/2;

        if(carro.x >= carro.canvas.width-carro.tamanho){
            carro.x = carro.canvas.width-carro.tamanho;
        } else if(carro.x <= 0){
            carro.x = 0;
        }

        if(carro.y >= carro.canvas.height-carro.tamanho){
            carro.y = carro.canvas.height-carro.tamanho;
        } else if(carro.y <= 0){
            carro.y = 0;
        }


    })
    ctx.beginPath()
    ctx.drawImage(this.imagem,this.x,this.y,this.tamanho,this.tamanho);
    ctx.closePath()
    }
}   
function animacao(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,400,400)
    carro.gerar();
    requestAnimationFrame(animacao)



}
animacao()


