var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);


ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(210,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'azul';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",205,350)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",205,350)
ctx.closePath();


/*CANVAS 2*/ 
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.strokeRect(0,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.strokeRect(350,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.strokeRect(0,350,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.fillRect(350,350,50,50);
ctx2.strokeRect(350,350,50,50);
ctx2.closePath();

/*Linhas*/ 

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

/*Circulos*/ 
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(80,150,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(330,150,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

/*outras linhas*/

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(350,50);
ctx2.lineTo(0,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(50,50);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'black';
ctx2.fillStyle = 'black';
ctx2.font = "25px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Desenvolvimento Web",200,75)
ctx2.closePath();


/*CANVAS 3*/ 
var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");


ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'gray';
ctx3.fillRect(0,300,400,100);
ctx3.closePath();

/*Casa*/
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = '#8d4925';
ctx3.fillRect(150,200,100,100);
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 1;
ctx3.fillStyle = 'Tomato';
ctx3.moveTo(150,200);
ctx3.lineTo(250,200);
ctx3.lineTo(200,150);
ctx3.lineTo(150,200);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'royalblue';
ctx3.fillRect(160,220,30,30);
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'royalblue';
ctx3.fillRect(210,220,30,30);
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'black';
ctx3.fillRect(190,250,20,50);
ctx3.closePath();

/*sol*/
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'yellow';
ctx3.arc(300,100,50,0*Math.PI,2*Math.PI);
ctx3.fill();
ctx3.closePath();

/*Arvores*/

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = '#8d4925';
ctx3.fillRect(60,240,30,60);
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'green';
ctx3.arc(75,220,40,0*Math.PI,2*Math.PI);
ctx3.fill();
ctx3.closePath();



ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = '#8d4925';
ctx3.fillRect(320,300,30,60);
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'green';
ctx3.arc(335,270,40,0*Math.PI,2*Math.PI);
ctx3.fill();
ctx3.closePath();

/*Onda estranha*/

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'blue';
ctx3.arc(0,300,60,1*Math.PI,2*Math.PI);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'blue';
ctx3.fillRect(0,300,60,100);
ctx3.closePath();