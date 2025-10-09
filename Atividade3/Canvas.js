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
function letra(contexto,linha,corfundo,corfora,fonte,centralizar,texto,x,y){
    contexto.beginPath();
    contexto.lineWidth = linha;
    contexto.fillStyle = corfundo;
    contexto.strokeStyle = corfora;
    contexto.font = fonte;
    contexto.textAlign = centralizar;
    contexto.fillText(texto,x,y);
    contexto.strokeText(texto,x,y)
    contexto.closePath();
}





/*DESENHO ABSTRATO*/


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
circle(ctx,2,'white','green',135,150,65,1,1.3)
circle(ctx,2,'white','green',148,150,79,1.76,2)
circle(ctx,2,'white','green',148,150,79,1.76,2)
circle(ctx,2,'white','green',150,299,55,1.5,2)
circle(ctx,2,'white','green',150,299,70,1,1.5)
circle(ctx,2,'aquamarine','green',150,299,40,1,2)
letra(ctx,1,'black','black','30px Arial','center','Canvas',150,60)

/*DESENHO CASA*/
circle(ctx2,2,'yellow','yellow',220,70,35,0,2)
triangulo(ctx2, 1, 'Tomato','Tomato',110,150,190,150,150,110,110,150)
quadrado(ctx2,1,'SaddleBrown','SaddleBrown',110,150,80,90,110,150,80,90)
quadrado(ctx2,1,'DeepSkyBlue','DeepSkyBlue',115,170,25,25,115,170,25,25)
quadrado(ctx2,1,'DeepSkyBlue','DeepSkyBlue',160,170,25,25,160,170,25,25)
quadrado(ctx2,1,'black','black',143,195,15,46,143,195,15,46)
quadrado(ctx2,2,'gray','gray',0,240,300,60,0,240,300,60)
circle(ctx2,2,'DeepSkyBlue','DeepSkyBlue',0,240,50,1,2)
quadrado(ctx2,2,'DeepSkyBlue','DeepSkyBlue',0,240,50,60,0,240,50,60)
quadrado(ctx2,2,'DeepSkyBlue','DeepSkyBlue',0,260,110,40,0,260,110,40)
circle(ctx2,2,'DeepSkyBlue','DeepSkyBlue',110,300,40,1,2)
quadrado(ctx2,1,'SaddleBrown','SaddleBrown',52,187,20,53,52,187,20,53)
circle(ctx2,2,'green','green',62,170,25,0,2)
quadrado(ctx2,1,'SaddleBrown','SaddleBrown',250,210,20,53,250,210,20,53)
circle(ctx2,2,'green','green',260,200,25,0,2)
