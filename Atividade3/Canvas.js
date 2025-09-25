var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");


function quadrado(contexto,linha,cor,corborda,xfundo,yfundo,c1,c2,xborda,yborda,c3,c4){
contexto.beginPath();
contexto.lineWidth = linha;
contexto.fillStyle = cor;
contexto.strokeStyle = corborda;
contexto.fillRect(xfundo,yfundo,c1,c2);
contexto.strokeRect(xborda,yborda,c3,c4);
contexto.closePath();
}

function linha(contexto, linha, cor,x1,y1,x2,y2){
contexto.beginPath();
contexto.lineWidth = linha;
contexto.strokeStyle = cor;
contexto.moveTo(x1,y1);
contexto.lineTo(x2,y2);
contexto.stroke();
contexto.closePath();
}
function circle(contexto,linha,cordentro,corfora,x,y,tamanho,cmc,term){
contexto.beginPath();
contexto.lineWidth = linha;
contexto.fillStyle = cordentro;
contexto.strokeStyle = corfora;
contexto.arc(x,y,tamanho,cmc*Math.PI,term*Math.PI);
contexto.fill();
contexto.stroke();
contexto.closePath();
}
function triangulo(contexto, linha, corfora,cordentro,x1,y1,x2,y2,x3,y3,x4,y4){
contexto.beginPath();
contexto.lineWidth = linha;
contexto.strokeStyle = corfora;
contexto.fillStyle = cordentro
contexto.moveTo(x1,y1);
contexto.lineTo(x2,y2);
contexto.lineTo(x3,y3);
contexto.lineTo(x4,y4);
contexto.stroke();
contexto.fill();
contexto.closePath();
}








quadrado(ctx,2,'blue','blue',0,0,50,50,0,0,50,50)
quadrado(ctx,2,'red','red',250,0,50,50,250,0,50,50)
quadrado(ctx,2,'black','black',230,260,70,40,230,260,70,40)
quadrado(ctx,2,'black','black',260,220,40,40,260,220,40,40)
quadrado(ctx,2,'yellow','yellow',0,260,70,40,0,260,70,40)
quadrado(ctx,2,'yellow','yellow',0,220,40,40,0,220,40,40)
circle(ctx,2,'white','green',150,150,60,1,2)
linha(ctx, 2, 'red',300, 0,150,150)
linha(ctx, 2, 'blue',0, 0,150,150)
quadrado(ctx,2,'aquamarine','aquamarine',0,120,30,60,0,120,30,60)
quadrado(ctx,2,'aquamarine','aquamarine',270,130,30,30,0,120,30,60)
quadrado(ctx,2,'red','red',110,150,40,40,110,150,40,40)
linha(ctx, 2, 'green',0, 150,300,150)
linha(ctx, 2, 'gray',150, 150,150,300)
quadrado(ctx,2,'white','black',0,0,0,0,0,0,300,300)
circle(ctx,2,'yellow','green',80,230,15,0,2)
circle(ctx,2,'yellow','green',210,230,15,0,2)
circle(ctx,2,'aquamarine','blue',150,110,15,0,2)
circle(ctx,2,'white','green',100,150,45,1,1.5)

