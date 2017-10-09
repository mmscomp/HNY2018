var canvas, ctx, h, w, now, then, delta;

canvas = document.getElementById("Canvas");
ctx = canvas.getContext('2d');

w = canvas.width;
h = canvas.height;

var x=20,y=20,k=20,vx=1;
var str = ['H','a','p','p','y', 'N','e','w', 'Y','e','a','r'];
var yr = '2017';
//ctx.strokeRect(20,20,20,20);
var witch = {
  x:40,
  y:120,
  vwx:1,
  vwy:1
};
var ball ={
  x:30,
  y:400,
  r:10,
  vx:4,
  vy:5,
//  onclick:updateBall(300,400)
};

then = new Date().getTime();
window.onload=function init(){
  startAnimation();
};

var inputStates = false;
function startAnimation(){
  requestAnimationFrame(mainLoop);
}

function clearCanvas(){
  ctx.clearRect(0,0,w,h);
}

function updateWish(delta){
  if(x>=w-180){
    x=w-180;
    vx=-vx;
  }
  if(x<20){
    x=20;
    vx=-vx;
  }
  x+=vx*delta/100;
}


function drawWish(s,k){
  ctx.save();
  if(yr==='2018'){
    ctx.font="60pt Ariel";
  ctx.strokeStyle ='rgba(0,255,255,1)'; //'red';
  ctx.strokeRect(20,180,w-60,y+75);
  
  ctx.fillStyle='green';
  ctx.fillText(yr,x,y+235);
 
  ctx.fillStyle='red';  
  ctx.fillText(s,k+Math.random()*10,160+Math.random()*5);
  }
  else{
  ctx.font="20pt Ariel";
  ctx.strokeStyle ='rgba(255,100,100,1)'; //'red';
  ctx.strokeRect(20,100,460,y+25);
  
  ctx.strokeStyle='blue';
  ctx.strokeText(yr,x,y+105);
 
  ctx.strokeStyle='purple';  
  ctx.strokeText(s,k+Math.random(),90+Math.random()*3);
}
  ctx.restore();
}
var angle = 0;
function drawWitch(){
  ctx.save();
  //temple, nose, mouth
  ctx.translate(witch.x,witch.y);
  if(yr==='2016'){
    angle += delta/100;
    ctx.rotate(angle);
    ctx.scale(1/Math.abs(angle/10),1/Math.abs(angle/10));
  //  ctx.strokeText(delta,0,0);
  }
//  this.rotate1 = function(){
//     ctx.translate(witch.x,witch.y);

//    ctx.rotate(0.9);
//ctx.scale(0.4,0.4);
 // }
// this.draw = function(){
  ctx.beginPath();
  ctx.moveTo(0,0);//(witch.x,witch.y);
  ctx.arc(50,90,40,1.3*Math.PI,0.9*Math.PI,true);//(witch.x+50,witch.y+90,40,1.3*Math.PI,0.9*Math.PI,true);
  ctx.lineTo(-30+Math.random()*10,120);//(witch.x-30+Math.random()*10,witch.y+120);
  ctx.lineTo(0,130);//(witch.x,witch.y+130);
  ctx.lineTo(10,140);//(witch.x+10,witch.y+140);
  ctx.lineTo(30,150+Math.random()*5);//(witch.x+30,witch.y+150+Math.random()*5);
  ctx.lineTo(15,160);//(witch.x+15,witch.y+160);
  ctx.lineTo(20,165);//(witch.x+20,witch.y+165);
  ctx.arc(30,175,10,0.9*Math.PI,0.3*Math.PI,true);//(witch.x+30,witch.y+175,10,0.9*Math.PI,0.3*Math.PI,true);
  ctx.stroke();
  //nose tip
  ctx.beginPath();
  ctx.arc(-30+Math.random()*10,120,5,0,2*Math.PI);//(witch.x-30+Math.random()*10,witch.y+120,5,0,2*Math.PI);
  ctx.fill();
  //jaws
  ctx.beginPath();
  ctx.arc(45,125,70,1.4*Math.PI,0.5*Math.PI);//(witch.x+45,witch.y+125,70,1.4*Math.PI,0.5*Math.PI);
  ctx.arc(45,125,72,1.4*Math.PI,0.5*Math.PI);//(witch.x+45,witch.y+125,72,1.4*Math.PI,0.5*Math.PI);

  ctx.fill();
  //tongue
  //ctx.fillStyle = '';
  //ctx.fillRect(witch.x+30,witch.y+147+Math.random()*5,-30,4);
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(30,150);//(witch.x+30,witch.y+150);
  ctx.lineTo(0,145+Math.random()*20);//(witch.x,witch.y+145+Math.random()*20);
  ctx.stroke();
  //eye
  ctx.beginPath();
  ctx.moveTo(10,100);//(witch.x+10,witch.y+100);//(50,220);
  ctx.lineTo(25,105);//(witch.x+25,witch.y+105);//(65,225);
  ctx.lineTo(5,105);//(witch.x+5,witch.y+105);//(50,225);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.lineWidth=1;
  ctx.moveTo(45,120);//(witch.x+45,witch.y+120);
  ctx.lineTo(-20,280);//(witch.x-20,witch.y+280);//(20,400);
  ctx.lineTo(160,230);//(witch.x+160,witch.y+230);//(200,350);
  ctx.lineTo(80,190);//(witch.x+80,witch.y+190);//(120,310);
//  ctx.fillStyle='';
  ctx.fill();
 // ctx.closePath();
 // ctx.restore();
  
  ctx.beginPath();
  ctx.moveTo(-30,300);//(witch.x-30,witch.y+300);//(10,420);
  ctx.lineWidth = 9;
 // ctx.lineStyle = 'red';
  ctx.lineTo(210,160);//(witch.x+210,witch.y+160);//(250,280);
  ctx.stroke();  
  
  ctx.beginPath();
 // ctx.moveTo(250,280);
  ctx.lineWidth=0.6;
  for(var i=0;i<20;i++){
  ctx.moveTo(210,160);//(witch.x+210,witch.y+160);//(250,280);
  ctx.lineTo(240+i*Math.random()*5,120-i*Math.random()*5);//(witch.x+240+i*Math.random()*5,witch.y+120-i*Math.random()*5);
  }
  ctx.stroke();
 // };
 /* this.rotate = function(){
    ctx.rotate(Math.PI/2);
  }*/

 /* this.move=function(){
    witch.x += witch.vwx;
    witch.y += witch.vwy;
  }*/
  ctx.restore();
//}
}
function updateWitch(delta){
  if(witch.x>600){//||witch.x<10){
    witch.x = 600;
    witch.vwx *=-1;
  //  witch.vwy 
  }
  if(witch.x ===320){
    witch.vwy *= -1;
  }
  if(witch.x<10){
    witch.x=10;
    witch.vwx *=-1;
  }
  if(witch.y>300){//||witch.y<10){
    witch.y=300;
    witch.vwy *=-1;
  }
  if(witch.y<100){
    witch.y=100;
    witch.vwy *=-1;
  }
  witch.x+=witch.vwx*delta/4;
  witch.y+=witch.vwy*delta/10;
  ctx.font = "60pt Ariel"
//  ctx.strokeText(inputStates,20,40);
}

function drawBall(){
 // ball.x=x;
//  ball.y=y;
ctx.save()
  ctx.beginPath();
  ctx.moveTo(ball.x,ball.y);
  ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.restore();
}
function updateBall(delta){
if(ball.x>600){
  ball.x = 600;
  ball.vx *= -1;
}
if(ball.x<10){
  ball.x=10;
  ball.vx *= -1;
}
if (ball.y>500){
  ball.y = 500;
  ball.vy *= -1;
}
if (ball.y < 10){
  ball.y = 10;
  ball.vy *= -1;
}
  ball.x+=ball.vx*delta/10;
  ball.y-=ball.vy*delta/10; 

  if(yr==='2018'){
    ball.r *=delta/1000;
  }
}

  function collisionWithNose(){
    if (ball.x>=witch.x-40 && ball.x<=witch.x-20&&ball.y>=witch.y+110&&ball.y<=witch.y+130){
   //   wit.rotate1();
      yr = '2018';
    }
  }
  function getMousePos(evt) {
    // Necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

   // Mouse event listeners
   canvas.addEventListener('mousedown', function (evt) {
     inputStates = true;
   }, false);

//var wit =new drawWitch();

function mainLoop(){
  
  clearCanvas();
  now = new Date().getTime();
  delta = now - then;
 //noprotect
  for(var i=0; i<str.length; i++){
  updateWish(delta);
  drawWish(str[i],k+i*45);
  }
  
 drawWitch();
 //wit.move();
 // wit.draw();
 // wit.rotate1();

  updateWitch(delta);
 // wit.draw();

     if(inputStates){//if (inputStates.mousePos) {
 // if (inputStates.mousePos.x<ball.x+5&&inputStates.mousePos.x>ball.x-5){
      updateBall(delta);
 //    inputStates.mousePos.x = ball.x;
 //    inputStates.mousePos.y = ball.y;
 // }
     }
  drawBall();
  collisionWithNose();
  then = now;
  
  requestAnimationFrame(mainLoop);
}
